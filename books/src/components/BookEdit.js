import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book}) {
    const [title,setTitle] = useState(book.title);
    const {updateBookById} = useBooksContext();

    const handleChange = (evt) => {
        setTitle(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        updateBookById(book.id,title);
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit;