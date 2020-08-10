import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });
    const inputEvent = (event) => {
        const {name, value} = event.target;
setFormData(preVal => {
return {
    ...preVal,
     [name]: value,
}
})
    }
    const submitContactForm = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div pb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={submitContactForm}>
                            <div className="mb-3">
                                <label  className="form-label">Full Name</label>
                                <input type="text"  name="fullName" value={formData.fullName} onChange={inputEvent}
                                className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"/>
                       
                            </div>
                            <div className="mb-3">
                                <label  
                                 className="form-label">Phone Number</label>
                                <input type="text" className="form-control"
                                 name="phone" value={formData.phone} onChange={inputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone"/>
                            </div>
                            <div className="mb-3">
                                <label  
                                 className="form-label">Email address</label>
                                <input type="email" className="form-control"  name="email" value={formData.email} onChange={inputEvent}
                                 id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            </div>
                            <div className="mb-3">
                                <label   
                                 className="form-label">Message</label>
                                <textarea className="form-control" name="message" value={formData.message} onChange={inputEvent}
                                 id="exampleFormControlTextarea1" rows="3" placeholder="Enter Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;