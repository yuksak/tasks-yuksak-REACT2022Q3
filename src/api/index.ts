const API_LINK = 'https://rickandmortyapi.com/api/';

export const getAllData = async (props: string) => {
  const data = await fetch(API_LINK + `character/?name=${props}`);
  const response = await data.json();

  return response;
};
