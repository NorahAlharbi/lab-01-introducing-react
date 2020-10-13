import React from 'react';
import {Container} from 'react-bootstrap';


const Gretting = ({name}) => {

    return (
        <Container style = {{backgroundcolor: "#483D8B"}}>
            <h1 style = {{color: "#483D8B"}}>Hello .. {name}, welcome!!</h1>
        </Container>
    );
};

export default Gretting;