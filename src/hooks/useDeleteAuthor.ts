import { useMutation } from "react-query";

import { _deleteAuthor } from "../services/author";
import useAuthorStore from "../stores/useAuthorStore";

const useCreateAuthor = (id: number) => {
  const { getAllAuthors } = useAuthorStore();
  return useMutation(() => _deleteAuthor(id), {
    onSuccess: async () => {
      getAllAuthors();
    },
  });
};

export default useCreateAuthor;
