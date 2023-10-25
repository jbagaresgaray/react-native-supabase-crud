import supabase from "./";
import { IAuthor } from "../interface";

export const _createAuthor = async (author: IAuthor) => {
  const { data, error } = await supabase
    .from("author")
    .insert({
      ...author,
    })
    .select();

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
};

export const _getAuthor = async (id: number) => {
  const { data, error } = await supabase
    .from("author")
    .select(`id, title, author, genre, publishedDate`)
    .eq("id", id)
    .single();
  console.log("data: ", data);

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
};

export const _getAllAuthors = async () => {
  const { data, error } = await supabase
    .from("author")
    .select(`id, title, author, genre, publishedDate`);

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
};

export const _updateAuthor = async (id: number, author: IAuthor) => {
  console.log("IDNumber: ", id);
  const { data, error } = await supabase
    .from("author")
    .update({
      title: author.title,
      author: author.author,
      publishedDate: author.publishedDate,
      genre: author.genre,
    })
    .eq("id", id)
    .select();
  console.log("UpdateData: ", data);
  console.log("UpdateError: ", error);

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
};

export const _deleteAuthor = async (id: number) => {
  const { data, error } = await supabase.from("author").delete().eq("id", id);

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
};
