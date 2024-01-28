import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const {createBooks} = useBooksContext();

    const handleChange = (evt) => {

        setTitle(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        createBooks(title);
        setTitle('');
    }

    return <div className="book-create">
        <h3>Add a book.</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Create</button>
        </form>
    </div>
}

export default BookCreate;