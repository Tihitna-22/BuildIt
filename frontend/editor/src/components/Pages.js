import React, { useState } from 'react';
import Dashboard from './Dashboard';
import '../main.css';

const Pages = () => {
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(true);
    const handleSubmit = async () => {
        if (!name) {
            setIsValid(false);
            return;
        }
    };
    return (
        <div className='Home'>
            <Dashboard />
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <form id="create-page">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addPageModalLabel">
                                    Create Page
                                </h5>
                            </div>
                            <div className="modal-body">
                                <div className="col-auto">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                                            }`}
                                        id="name"
                                        name="name"
                                        placeholder="Name of Page"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {!isValid && (
                                        <div className="invalid-feedback">
                                            Please provide a valid name.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal"
                                >
                                    Clear
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={handleSubmit}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 my-2">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Slug</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pages