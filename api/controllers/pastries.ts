import { Request, Response } from 'express';
import { Pastry } from '../models';

export const listPastries = async (req: Request, res: Response) => {
    try {
        const pastries = await Pastry.find();
        if (!pastries || pastries.length === 0) {
            return res.status(404).json({ pastries: 'Aucune pâtisserie.' });
        }
        res.json(pastries);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};
