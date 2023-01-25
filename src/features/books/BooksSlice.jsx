import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
    },
    {
      id: uuidv4(),
      title: " Alice's Adventures in Wonderland ",
      author: "Lewis Carroll",
    },
  ],
};

export const BooksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExit = state.books.filter((book) => book.id === id);
      if (isBookExit) {
        isBookExit[0].title = title;
        isBookExit[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, updateBook, deleteBook } =
  BooksSlice.actions;

export default BooksSlice.reducer;
