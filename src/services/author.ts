import supabase from "./";
import { IAuthor } from "../interface";

export const _createAuthor = async (author: IAuthor) => {
  const { data, error, status } = await supabase
    .from("author")
    .insert({
      ...author,
    })
    .select();

  if (data && status === 200) {
    throw error;
  }

  if (data) {
    return data;
  }
};

export const _getAuthor = async (id: number) => {
  const { data, error, status } = await supabase
    .from("author")
    .select(`id, title, author, genre, publishedDate`)
    .eq("id", id)
    .single();

  if (data && status === 200) {
    throw error;
  }

  if (data) {
    return data;
  }
};

export const _getAllAuthors = async () => {
  const { data, error, status } = await supabase
    .from("author")
    .select(`id, title, author, genre, publishedDate`);

  if (error && status !== 406) {
    throw error;
  }

  if (data && status === 200) {
    return data;
  }
};

export const _updateAuthor = async (id: number, author: IAuthor) => {
  const { data, error, status } = await supabase
    .from("author")
    .update({
      ...author,
    })
    .eq("id", id)
    .select();

  if (data && status === 200) {
    throw error;
  }

  if (data) {
    return data;
  }
};

export const _deleteAuthor = async (id: number) => {
  const { data, error, status } = await supabase
    .from("author")
    .delete()
    .eq("id", id);

  if (data && status === 200) {
    throw error;
  }

  if (data) {
    return data;
  }
};
