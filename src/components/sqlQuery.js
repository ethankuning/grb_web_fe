import React, {Fragment, useState, useEffect} from "react";

const SqlQuery = () => {
    const [inputQuery, setInputQuery] = useState("");
    const [outputResult, setOutputResult] = useState("");

    const handleInputChange = (e) => {
        setInputQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("https://grb-web-be.vercel.app/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sqlquery: inputQuery }),
          });
          
          const data = await response.json();
          console.log(data);
          setOutputResult(data);
          console.log(outputResult);
        } catch (err) {
          console.error(err.message);
        }
    };

    return (
        <Fragment>
            <br />
            <h3>Custom SQL Query</h3>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input">Input:</label>
                    <textarea type="text" id="input" className="form-control" name="input" value={inputQuery} onChange={handleInputChange} style={{height:200}} />
                </div>
                <div className="text-center">
                    <button className="btn btn-success btn-block" style={{width: 100}}>Submit</button>
                </div>
                <br></br>
                <br></br>
                <div className="form-group">
                    <label htmlFor="output">Output:</label>
                    <textarea type="text" id="output" className="form-control" name="output" value={JSON.stringify(outputResult)} style={{height:300}} readOnly/>
                </div>
            </form>
        </Fragment>
    );
};

export default SqlQuery;