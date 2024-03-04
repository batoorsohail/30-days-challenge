import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");

  const onBookChanged = (e) => (setBookName(e.target.value));
  const onAuthorChanged = (e) => (setAuthorName(e.target.value));

  const onSubmitAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: nanoid(),
      title: bookName,
      author: authorName,
    };

    dispatch(addBook(newBook));
    setBookName("");
    setAuthorName("");
  };

  return (
    <section>
      <form onSubmit={onSubmitAddBook} className="flex justify-center gap-10 mt-20">
        <input type="text" placeholder="Book Name" onChange={onBookChanged} className="px-[6px] py-[4px]" required />
        <input type="text" placeholder="Author name" onChange={onAuthorChanged} className="px-[6px] py-[4px]" required />
        <button type="submit" className="bg-blue-600 text-white font-bold px-5 py-[4px]">Add Book</button>      </form>
    </section>
  );
};

export default AddBook;
