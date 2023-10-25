import { useMutation } from "react-query";

import { IAuthor } from "../interface";
import { _createAuthor } from "../services/author";
import useAuthorStore from "../stores/useAuthorStore";

const useCreateAuthor = (author: IAuthor) => {
  const { getAllAuthors } = useAuthorStore();
  return useMutation(() => _createAuthor(author), {
    onSuccess: async () => {
      getAllAuthors();
    },
  });
};

export default useCreateAuthor;
