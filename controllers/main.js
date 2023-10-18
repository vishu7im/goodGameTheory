import { BookModel } from "../DB/main.js";

// create
export const createBook = async (req, res) => {
  const { name, description, language } = req.body;

  try {
    const input = new BookModel({ name, description, language });

    await input.save();
    res.status(200).json({ msg: "book save" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

// read
export const readBook = async (req, res) => {
  try {
    const data = await BookModel.find();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

// Update
export const updateBook = async (req, res) => {
  const { id } = req.query;
  const { name, description, language } = req.body;

  try {
    await BookModel.findByIdAndUpdate(
      { _id: id },
      { name, description, language }
    );
    res.status(200).json({ msg: "book Update" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

// Delete
export const delBook = async (req, res) => {
  const { id } = req.query;

  try {
    await BookModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: "book Delete" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
