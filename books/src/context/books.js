import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async() => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data);
    },[])

    const createBooks = async(title) => {
        const response = await axios.post('http://localhost:3001/books', {title})
            const updateBooks = [...books,response.data]
            setBooks(updateBooks);
    }

    
    const deleteBookById = async(id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        
        const updateBooks = [...books.filter(b=> b.id !== id)]
        setBooks(updateBooks);
    }

    const updateBookById = async(id,title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{title});

        const updateBooks = books.map(b=>{
            if(b.id === id){
                return {...response.data}
            }
            return b;
        });
        setBooks(updateBooks);
    }

    const valueToShare = {books, fetchBooks, createBooks, deleteBookById, updateBookById };
    return <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
}

export {Provider};
export default BooksContext;