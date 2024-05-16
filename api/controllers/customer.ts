import { Request, Response } from 'express';
import { Customer, ICustomer } from '../models';
import jwt from 'jsonwebtoken';

export const signUp = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName } = req.body as ICustomer;

        let customer = await Customer.findOne({ email });
        if (customer) {
            return res.status(400).json({ message: 'Ce client existe déjà.' });
        }
        customer = new Customer({ email, firstName, lastName });
        await customer.save();

        const token = jwt.sign({ userId: customer._id }, process.env.JWT_SECRET as string, {expiresIn: '1h'});
        res.status(201).json({ message: 'Client enregistré avec succès.', token });
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};

export const getCustomerDetails = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const customer = await Customer.findById(userId);
        if (!customer) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }
        res.json(customer);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};
export const userPrices = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const customer = await Customer.findById(userId);

        if (!customer) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        const pastriesWon = customer.launchs.map((launch: any) => launch.pastries);

        res.json({ pastriesWon });
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};


