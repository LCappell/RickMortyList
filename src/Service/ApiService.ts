const baseUrl = 'https://rickandmortyapi.com/api';

export const fetchData = async (data: string) => {
  const req = await fetch(`https://rickandmortyapi.com/api/${data}`);
  const res = await req.json();
  console.log(res);
  return res;
};
