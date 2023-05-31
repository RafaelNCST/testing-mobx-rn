import axios from 'axios';

const api = axios.create();

export const GET_PHRASE = async (params: string) => {
  try {
    const response = await api.get(`https://api.api-ninjas.com/v1/quotes?category=${params}`, {
      headers: {
        'X-Api-Key': 'UdBJaG8h7ENP3kUICZLDqQ==VedOwSrm0yMVwUCF',
      },
    });
    return response;
  } catch (error) {
    throw new Error(error as any);
  }
};
