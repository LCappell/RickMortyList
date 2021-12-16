import { Character } from '../Types/Character';
const baseUrl = 'https://rickandmortyapi.com/api';

export const fetchData = async (data: string): Promise<Character> => {
  const req = await fetch(`${baseUrl}/${data}`);
  const res = await req.json();
  return res;
};
