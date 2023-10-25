import { IAuthor } from "../interface";

const useAuthor = () => {
  const createAuthor = (author: IAuthor) => {};

  const getAllAuthors = () => {};

  const getAuthor = (id: number) => {};

  const updateAuthor = (id: number, author: IAuthor) => {};

  const deleteAuthor = (id: number) => {};

  return {
    createAuthor,
    getAllAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor,
  };
};

export default useAuthor;
