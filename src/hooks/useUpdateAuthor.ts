import { useMutation } from "react-query";

import { IAuthor } from "../interface";
import { _updateAuthor } from "../services/author";
import useAuthorStore from "../stores/useAuthorStore";

const useUpdateAuthor = (id: number, author: IAuthor) => {
  const { getAllAuthors } = useAuthorStore();
  return useMutation(() => _updateAuthor(id, author), {
    onSuccess: async () => {
      getAllAuthors();
    },
  });
};

export default useUpdateAuthor;
