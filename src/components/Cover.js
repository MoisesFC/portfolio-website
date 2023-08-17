import { Card, Container } from "react-bootstrap";
import profilePic from "../img/profile-picNonBkg.png"
import React, { useState, useEffect } from 'react';
import { PiCaretDoubleDownBold } from 'react-icons/pi';
import {AiFillCaretDown} from 'react-icons/ai';

const Cover = () => {

    const [typedText, setTypedText] = useState('');
    const originalText = "Hello!\nI'm Moises Figueroa.\nA Software Developer located in the Greater Atlanta Area.";


    useEffect(() => {
        let charIndex = 5;
        const typingInterval = setInterval(() => {
            if (charIndex <= originalText.length) {
                setTypedText(originalText.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30);

        return () => clearInterval(typingInterval);
    }, []);



    return (
        <>
            <Container className="pt-5 d-none d-md-flex">
                <Card className="d-flex flex-row align-items-center custom-card pt-5">
                    <Card.Img variant="left" src={profilePic} style={{ width: '30vw', height: '30vw', borderRadius: '0' }} />
                    <Card.Body>
                        <Card.Text className=" p-4 cover-text">
                            {typedText}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="pt-5 d-md-none ">
                <Card className="no-background-border">
                    <Card.Img variant="top" src={profilePic} />
                    <Card.Text className="cover-text text-center" style={{ height: "140px" }}>
                        {typedText}
                    </Card.Text>
                </Card>

            </Container>
            <Container className="pt-5">
                <div>
                    <p>
                    <PiCaretDoubleDownBold className="rocking-caret" size={50}/>
                    </p>
                </div>
            </Container>

        </>
    );
}

export default Cover;