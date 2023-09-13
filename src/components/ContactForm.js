import React, { useRef, useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap'; // Import Modal and Button components
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false); // State to control the modal visibility

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ep0fp0f', 'template_3d8prmi', form.current, 'a9NR3jPzuh_VRWGwZ')
            .then((result) => {
                console.log(result.text);
                resetForm();
                setShowModal(true); // Show the modal when the form is successfully submitted
            })
            .catch((error) => {
                console.error(error.text);
            });
    };

    const resetForm = () => {
        const formElements = form.current.elements;
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].type !== 'submit') {
                formElements[i].value = '';
            }
        }
    };
    return (
        <>
            <Container className='mt-5'>
                <h3 style={{ color: 'black', textAlign: 'center', textDecoration: "underline", marginBottom: "20px" }}>Contact Me</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <label style={{ color: 'black', textAlign: 'center' }}>Name</label>
                    <input required type="text" name="from_name" />
                    <label required style={{ color: 'black', textAlign: 'center' }}>Email</label>
                    <input type="email" required name="from_email" />
                    <label required style={{ color: 'black', textAlign: 'center' }}>Phone</label>
                    <input type="phone" required name="from_phone" />
                    <label  style={{ color: 'black', textAlign: 'center' }}>Message</label>
                    <textarea required name="message" />
                    <input variant="secondary" className='mt-3' type="submit" value="Send" />
                </form>

                <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Message Sent!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><strong>Thank You!</strong> <br />I have received your message and will reach out to you soon.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default ContactForm;

