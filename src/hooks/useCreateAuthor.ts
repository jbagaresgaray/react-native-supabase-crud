import { useMutation } from "react-query";

import { IAuthor } from "../interface";
import { _createAuthor } from "../services/author";
import useAuthorStore from "../stores/useAuthorStore";

const useCreateAuthor = () => {
  const { getAllAuthors } = useAuthorStore();
  return useMutation({
    mutationFn: (author: IAuthor) => _createAuthor(author),
    onSuccess: async () => {
      return getAllAuthors();
    },
  });
};

export default useCreateAuthor;
