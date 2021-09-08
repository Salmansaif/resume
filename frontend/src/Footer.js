import "./Footer.css"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="socials">
                            <a href="https://github.com/salmansaif" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/salman-saif"
                                target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>

                            <a href="https://drive.google.com/file/d/1gKgueR_Ykd2Bg7ebnZVTmIKC0_s7VryI/view?usp=sharing"
                                target="_blank" rel="noreferrer">
                                <i className="far fa-file"></i>
                            </a>

                            <a href="https://twitter.com/salmanthedev" target="_blank" rel="noreferrer">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;