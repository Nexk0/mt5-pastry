import type { ICustomer, IPastry } from "~/types";

const useApi = () => {
  const token = window.localStorage.getItem("token");
  const { retrieveCustomer } = useCustomerStore();
  const { apiUrl } = useRuntimeConfig().public;

  const register = async (payload: ICustomer) => {
    const response = await useFetch(`${apiUrl}/v1/customers/register`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return response;
  };

  const getUser = async () => {
    const response = await useFetch<ICustomer>(`${apiUrl}/v1/customers/getUser`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };

  const launchDices = async () => {
    const response = await useFetch<ICustomer>(`${apiUrl}/v1/dices`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await retrieveCustomer(token);
    return response;
  }

  const listPastries = async () => {
    const response = await useFetch<Array<IPastry>>(`${apiUrl}/v1/pastries/list`);
    return response;
  };

  return { register, getUser, launchDices, listPastries };
}

export default useApi;