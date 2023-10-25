import { useMutation } from "react-query";

import { IAuthor } from "../interface";
import { _updateAuthor } from "../services/author";
import useAuthorStore from "../stores/useAuthorStore";

const useUpdateAuthor = () => {
  const { getAllAuthors } = useAuthorStore();
  return useMutation({
    mutationFn: ({ id, author }: { id: number; author: IAuthor }) =>
      _updateAuthor(id, author),
    onSuccess: async () => {
      return getAllAuthors();
    },
  });
};

export default useUpdateAuthor;
