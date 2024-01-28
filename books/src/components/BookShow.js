import { useState } from "react";
import BookEdit from './BookEdit';
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);

    const {deleteBookById} = useBooksContext();

    const handleEdit = () =>{
        setShowEdit(!showEdit);
    }
    const handleDelete = () => {
        deleteBookById(book.id);
    }

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book image" />
        {showEdit? <BookEdit book={book} handleEdit={handleEdit}/> : book.title }
        <div className="actions">
            <button className="edit" onClick={()=>handleEdit(book.id,book.title)}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
        </div>
}

export default BookShow;