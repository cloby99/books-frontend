import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function BooksList() {
    const [books, setBooks] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        getAllBooks();
    }, [])

    const getAllBooks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/books");
            setBooks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addNewBook = () => {
        navigator('/add-book');
    }

    const updateBook = (id) => {
        navigator(`/update-book/${id}`);
    }

    const removeBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/book/${id}`);
            getAllBooks();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='container'>
            <h2 className='text-center my-4'> List of Books</h2>
            <button className='btn btn-warning my-3' onClick={addNewBook}>Add Book</button>
            <table className='table table-dark table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Genre</th>
                        <th>Language</th>
                        <th>Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book =>
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.ISBN}</td>
                                <td>{book.genre}</td>
                                <td>{book.language}</td>
                                <td>{book.availability}</td>
                                <td>
                                    <button className='btn btn-light' onClick={() => updateBook(book.id)}>Update</button>
                                    <button className='btn btn-danger m-2' onClick={() => removeBook(book.id)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BooksList;
