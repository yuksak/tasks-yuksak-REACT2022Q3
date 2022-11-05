const API_LINK = 'https://rickandmortyapi.com/api/';

export const getAllData = async (props: { searchValue: string; pageNumber: number }) => {
  const data = await fetch(
    API_LINK + `character/?page=${props.pageNumber}&name=${props.searchValue}`
  );
  const response = await data.json();

  return response;
};
