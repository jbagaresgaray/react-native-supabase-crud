import { create } from "zustand";

import { IAuthor } from "../interface";
import { _getAllAuthors, _getAuthor } from "../services/author";

interface AuthorState {
  authors: IAuthor[] | null;
  author: IAuthor | null;
  isLoading: boolean;
  setAuthors: (data: IAuthor[] | null) => void;
  cleanAuthors: () => void;
  getAuthor: (id: number) => Promise<IAuthor | void>;
  getAllAuthors: () => Promise<void>;
}

const useAuthorStore = create<AuthorState>((set) => ({
  authors: null,
  isLoading: false,
  author: null,
  setAuthors: (data: IAuthor[]) => set({ authors: data }),
  cleanAuthors: () => set({ authors: null }),
  getAuthor: async (id: number) => {
    try {
      const response = await _getAuthor(id);
      set({ author: response });
      return Promise.resolve();
    } catch (error) {
      set({ author: null });
      return Promise.reject(error);
    }
  },
  getAllAuthors: async () => {
    try {
      set({ isLoading: true });
      const response = await _getAllAuthors();
      set({ authors: response, isLoading: false });
      return Promise.resolve();
    } catch (error) {
      set({ isLoading: false });
      return Promise.reject(error);
    }
  },
}));

export default useAuthorStore;
