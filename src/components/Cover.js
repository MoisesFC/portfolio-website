import { Card, Container } from "react-bootstrap";
import profilePic from "../img/profile-picNonBkg.png"

const Cover = () => {
    return(
        <Container className="pt-5">
        <Card className="d-flex flex-row align-items-center custom-card pt-5">
          <Card.Img variant="left" src={profilePic} style={{ width: '38vw', height: '35vw', borderRadius: '5%' }} />
          <Card.Body>
            <Card.Text className="cover-text">
              Hello!<br /> 
              I'm Moises Figueroa.<br />
              A Software Developer located in the Greater Atlanta Area.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
};

export default Cover;