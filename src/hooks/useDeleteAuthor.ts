import { useMutation } from "react-query";

import { _deleteAuthor } from "../services/author";
import useAuthorStore from "../stores/useAuthorStore";

const useDeleteAuthor = () => {
  const { getAllAuthors } = useAuthorStore();
  return useMutation({
    mutationFn: (id: number) => _deleteAuthor(id),
    onSuccess: async () => {
      return getAllAuthors();
    },
  });
};

export default useDeleteAuthor;
