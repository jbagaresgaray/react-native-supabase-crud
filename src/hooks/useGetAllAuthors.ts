import { useMutation } from "react-query";

import useAuthorStore from "../stores/useAuthorStore";

const useGetAllAuthors = () => {
  const { getAllAuthors } = useAuthorStore();
  return useMutation(() => getAllAuthors());
};

export default useGetAllAuthors;
