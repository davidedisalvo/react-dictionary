import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import style from './Header.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <div>
            <Jumbotron className={style.header}>
                <Container>
                    <Row>
                        <Col>
                            <h1>This is the English Dictionary</h1>
                            <p>Start typing the world to discover meaning, part of speach and definition</p>
                            <p>Click on the word to save it in your personal list</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Header
