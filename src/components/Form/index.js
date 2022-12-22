import React, { useState } from "react";
import Modal from "react-modal";
import './index.css'



const SearchDirectoryPage = () => {
    const [contactFirstName, setContactFirstName] = useState("");
    const [contactLastName, setContactLastName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [successModalMsg, setSuccessModalMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        setContactFirstName("");
        setContactLastName("");
        setContactEmail("");
        setContactMessage("");
    };



    return (
        <div>

            <div className="SubmitForm">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div align="left" width="50%">
                        <div className="label">First Name: </div>
                        <input
                            size="40"
                            type="text"
                            id="fname"
                            value={contactFirstName}
                            onChange={(e) => setContactFirstName(e.target.value)}
                        />
                        <br />
                        <div className="label">Last Name: </div>
                        <input
                            size="20"
                            type="text"
                            id="lname"
                            value={contactLastName}
                            onChange={(e) => setContactLastName(e.target.value)}
                        />
                        <br />
                        <div className="label">Email Address: </div>

                        <input
                            size="20"
                            type="text"
                            id="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                        />
                        <br />
                        <br />
                        <div className="TextForm">Questions/Comments: </div>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="6"
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                        ></textarea>
                        <input type="submit" value="Send" />

                    </div>
                </form>
            </div>
            <Modal
                isOpen={isSuccessModalOpen}
                onRequestClose={() => setIsSuccessModalOpen(false)}
            >
                <div>
                    <button onClick={() => setIsSuccessModalOpen(false)}>
                        Close
                    </button>
                </div>
                <p>{successModalMsg}</p>
            </Modal>


        </div>
    );
};

export default SearchDirectoryPage;
