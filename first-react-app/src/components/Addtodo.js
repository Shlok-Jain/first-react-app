import React from 'react'
import {Link} from 'react-router-dom'
export default function Addtodo({submit}) {
    return (
        <form className="const">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="Text" required className="form-control" id="exampleFormControlInput1" placeholder="Enter Title" />
</div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description"></textarea>
            </div>
            <div className="mb-3">
                <Link to="/">
            <button type="button" id="submit-btn" onClick={()=>{submit(document.getElementById("exampleFormControlInput1").value, document.getElementById("exampleFormControlTextarea1").value)}} className="btn btn-success">Add Todo</button>
            </Link>
            </div>
            </form>
            
            )
}
