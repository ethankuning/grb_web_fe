import React, {Fragment, useEffect, useState} from "react";
import EditBook from "./editBook";

const ListBook = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const response = await fetch("https://grb-web-be.vercel.app/books");
            const jsonData = await response.json();

            setBooks(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    const deleteBook = async (id) => {
        try {
            const deleteBook = await fetch(`https://grb-web-be.vercel.app/books/${id}`, {
                method: 'DELETE'
            });

            setBooks(books.filter(book => book.book_number !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <Fragment>
            <br></br>
            <br></br>
            <h3>Book List</h3>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Publisher ID</th>
                        <th>Author ID</th>
                        <th>Store ID</th>
                        <th>Book Title</th>
                        <th>Publication Year</th>
                        <th>Pages</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.book_number}>
                            <td>{book.book_number}</td>
                            <td>{book.publisher_number}</td>
                            <td>{book.author_number}</td>
                            <td>{book.store_number}</td>
                            <td>{book.book_name}</td>
                            <td>{book.publication_year}</td>
                            <td>{book.pages}</td>
                            <td>{book.price}</td>
                            <td>{book.quantity}</td>
                            <td><EditBook book={book}/></td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteBook(book.book_number)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListBook;