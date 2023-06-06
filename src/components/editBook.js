import React, {Fragment, useState, useEffect} from "react";

const EditBook = ({ book }) => {
    const [inputs, setInputs] = useState({
        book_number: "",
        author_number: "",
        publisher_number: "",
        store_number: "",
        book_name: "",
        publication_year: "",
        pages: "",
        price: "",
        quantity: ""
    });

    useEffect(() => {
        setInputs({
            book_number: book.book_number,
            author_number: book.author_number,
            publisher_number: book.publisher_number,
            store_number: book.store_number,
            book_name: book.book_name,
            publication_year: book.publication_year,
            pages: book.pages,
            price: book.price,
            quantity: book.quantity
        });
    }, [book]);

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
    
    const updateBook = async (e) => {
        e.preventDefault();
        try {
            const body = {
                author_number: parseInt(inputs.author_number),
                publisher_number: parseInt(inputs.publisher_number),
                store_number: parseInt(inputs.store_number),
                book_name: inputs.book_name,
                publication_year: parseInt(inputs.publication_year),
                pages: parseInt(inputs.pages),
                price: parseInt(inputs.price),
                quantity: parseInt(inputs.quantity)
            };
            console.log(body);
            const response = await fetch(`https://grb-web-be.vercel.app/books/${book.book_number}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${book.book_number}`}>Edit</button>
            <div id={`id${book.book_number}`} class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor={`book_number${book.book_number}`}>Book ID:</label>
                                    <input type="text" id={`book_number${book.book_number}`} className="form-control" defaultValue={inputs.book_number} onChange={onChange} name="book_number" disabled />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor={`author_number${book.book_number}`}>Author ID:</label>
                                    <input type="text" id={`author_number${book.book_number}`} className="form-control" defaultValue={inputs.author_number} onChange={onChange} name="author_number" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor={`publisher_number${book.book_number}`}>Publisher ID:</label>
                                    <input type="text" id={`publisher_number${book.book_number}`} className="form-control" defaultValue={inputs.publisher_number} onChange={onChange} name="publisher_number" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor={`store_number${book.book_number}`}>Store ID:</label>
                                    <input type="text" id={`store_number${book.book_number}`} className="form-control" defaultValue={inputs.store_number} onChange={onChange} name="store_number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor={`book_name${book.book_number}`}>Book Name:</label>
                                <input type="text" id={`book_name${book.book_number}`} className="form-control" defaultValue={inputs.book_name} onChange={onChange} name="book_name" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor={`publication_year${book.book_number}`}>Publication Year:</label>
                                    <input type="text" id={`publication_year${book.book_number}`} className="form-control" defaultValue={inputs.publication_year} onChange={onChange} name="publication_year" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor={`pages${book.book_number}`}>Pages:</label>
                                    <input type="text" id={`pages${book.book_number}`} className="form-control" defaultValue={inputs.pages} onChange={onChange} name="pages" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor={`price${book.book_number}`}>Price:</label>
                                    <input type="text" id={`price${book.book_number}`} className="form-control" defaultValue={inputs.price} onChange={onChange} name="price" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor={`quantity${book.book_number}`}>Quantity:</label>
                                    <input type="text" id={`quantity${book.book_number}`} className="form-control" defaultValue={inputs.quantity} onChange={onChange} name="quantity" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={updateBook}>Edit</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditBook;