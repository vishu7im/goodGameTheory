import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the book schema
const book = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  language: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Create the user model
export const BookModel = mongoose.model("Book", book);
