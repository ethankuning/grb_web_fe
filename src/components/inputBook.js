import React, { Fragment, useState, useEffect} from "react";

const InputBook = () => {
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

    const { book_number, author_number, publisher_number, store_number, book_name, publication_year, pages, price, quantity } = inputs;

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const parsedInputs = {
                ...inputs,
                book_number: parseInt(book_number),
                author_number: parseInt(author_number),
                publisher_number: parseInt(publisher_number),
                store_number: parseInt(store_number),
                publication_year: parseInt(publication_year),
                pages: parseInt(pages),
                price: parseInt(price),
                quantity: parseInt(quantity)
            };
            console.log(inputs);
            const response = await fetch("https://grb-web-be.vercel.app/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(parsedInputs)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };
    

    useEffect(() => {
        getBooks();
    }, []);
    
    const getBooks = async () => {
        try {
            const response = await fetch("https://grb-web-be.vercel.app/books");
            const jsonData = await response.json();
            
            let maxId = 0;
            jsonData.forEach(item => {
                if (item.book_number > maxId) {
                    maxId = item.book_number;
                }
            });
            
            setInputs({
                ...inputs,
                book_number: maxId + 1
            });
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Good Reading Bookstores</h1>
            <h3>Add Book</h3>
            <form className="mt-5" onSubmit={onSubmitForm}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="book_number">Book ID:</label>
                        <input type="text" id="book_number" className="form-control" name="book_number" defaultValue={inputs.book_number} onChange={onChange} disabled/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="author_number">Author ID:</label>
                        <input type="text" id="author_number" className="form-control" name="author_number" defaultValue={inputs.author_number} onChange={onChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="publisher_number">Publisher ID:</label>
                        <input type="text" id="publisher_number" className="form-control" name="publisher_number" defaultValue={inputs.publisher_number} onChange={onChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="store_number">Store ID:</label>
                        <input type="text" id="store_number" className="form-control" name="store_number" defaultValue={inputs.store_number} onChange={onChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="book_name">Book Name:</label>
                    <input type="text" id="book_name" className="form-control" name="book_name" defaultValue={inputs.book_name} onChange={onChange}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="publication_year">Publication Year:</label>
                        <input type="text" id="publication_year" className="form-control" name="publication_year" defaultValue={inputs.publication_year} onChange={onChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pages">Pages:</label>
                        <input type="text" id="pages" className="form-control" name="pages" defaultValue={inputs.pages} onChange={onChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="price">Price:</label>
                        <input type="text" id="price" className="form-control" name="price" defaultValue={inputs.price} onChange={onChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="text" id="quantity" className="form-control" name="quantity" defaultValue={inputs.quantity} onChange={onChange}/>
                    </div>
                </div>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputBook;