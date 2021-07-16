import React, { useState } from 'react'

const Summary = (props) => {

    console.log(props)

    const [info, setInfo] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
    });

    


    const inputEvent = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value,
        });
    }
    const old_notes = JSON.parse(localStorage.getItem('stickynote'));

    const saveNote = () => {

        const objNote = { fname: info.fname, lname: info.lname, phone: info.number, email: info.email };
        // console.log(old_notes.fname)

        if (old_notes) {
            old_notes.push(objNote)
            localStorage.setItem('stickynote', JSON.stringify(old_notes))
        }
        else {
            localStorage.setItem('stickynote', JSON.stringify([objNote]))
        }

        setInfo({
            fname: "",
            lname: "",
            phone: "",
            email: "",
        })
        console.log(objNote)
    }




    return (
        <div>
            <h1>Sticky Notes</h1>
            <nav className="navbar navbar-dark bg-dark justify-content-between w-75 m-auto" style={{ borderRadius: '7px' }}>
                <a className="navbar-brand">Notes</a>
                <form className="form-inline">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Notes</button>
                </form>
            </nav>


            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">First Name :</label>
                                    <input type="text" className="form-control" name="fname" onChange={inputEvent} value={info.fname} id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Last Name :</label>
                                    <input type="text" className="form-control" name="lname" onChange={inputEvent} value={info.lname} id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Phone Number :</label>
                                    <input type="number" className="form-control" name="number" onChange={inputEvent} value={info.number} id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Email :</label>
                                    <input type="email" className="form-control" name="email" onChange={inputEvent} value={info.email} id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={saveNote}>Save Notes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* sticky Notes render */}


            <div className="row w-100">
                {(old_notes) ? (
                    old_notes.map((old_note, key) => {
                        console.log(old_note.fname);
                        return (
                            <div className="col-md-4">
                                <div className="contentTasks mt-5" >


                                    <div className="card">
                                        <div className="card-header">
                                            <span style={{ fontSize: '20px' }} >Notes : {key} </span>
                                            <i class="fa fa-trash" style={{ float: 'right', marginLeft: '10px', fontSize: '25px' }} aria-hidden="true"></i>
                                            <i class="fa fa-pencil-square" style={{ float: 'right', fontSize: '25px' }} aria-hidden="true"></i>

                                        </div>

                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>First Name : {old_note.fname}</p>
                                                <p>Last Name : {old_note.lname}</p>
                                                <p>Phone Number : +91 {old_note.phone}</p>
                                                <p>E-mail : {old_note.email}</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })
                    
                    ) : null}
            </div>

            {/* Row Ends */}
        </div>
    )
}

export default Summary
