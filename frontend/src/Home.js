import './Home.scss';
import { Container, Row, Col } from 'react-bootstrap';


const Home = () => {
    return (
        <header className="home">
            <Container>
                <Row>
                    <Col>
                        <h1 className="My-name">I'm Salman Saif,</h1>
                        <span className="My-role">Software Developer. Designer.</span>
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
                        <a
                            className="contact-me"
                            href="mailto:salmanthedev@gmail.com" rel="noreferrer"
                            target="_blank"
                        >
                            Contact Me
                        </a>
                    </Col>
                    {/* <Col className="col-sm-4 col-12">
                        <img className="img-fluid My-photo rounded-circle" src="https://i.pinimg.com/736x/88/f2/c6/88f2c64810a4e128ea0157c592108e51.jpg" alt="Me" />
                    </Col> */}
                </Row>
            </Container>
        </header>
    )
}

export default Home;
