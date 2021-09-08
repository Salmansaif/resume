import './About.css'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';


const About = () => {
    return (
        <div className="section about-me">
            <Container>
                <Row>
                    <Col>
                        <h1 className="heading">About Me</h1>
                    </Col>
                </Row>
                <Row className="about-content">
                    <Col md="auto">
                        <Image src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.6435-9/159819886_2184383615029235_2253332178989483031_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Y9g7xlDkezoAX_nA1dj&tn=iIZk5GqjUxr5D7bq&_nc_ht=scontent.fkhi2-3.fna&oh=c177d3f4713ad46a3818fd0b231cd3d1&oe=615D01F4" roundedCircle />
                    </Col>
                    <Col>
                        <p className="intro">Aspiring Software Engineer with BS in Computer Science, have experience in front and back-end development using Python, Django. Developed E-commerce applications, web scrappers. Manage cloud VPS for various clients, love to explore amazing frameworks, libraries. Below are some of the skills and technologies I know.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="skill col-md-auto">
                        <i class="fab fa-html5"></i>
                    </Col>
                    <Col className="skill col-md-auto">
                        <i class="fab fa-css3-alt"></i>
                    </Col>
                    <Col className="skill col-md-auto">
                        <i class="fab fa-js-square"></i>
                    </Col>
                    <Col className="skill col-md-auto">
                        <i class="fab fa-python"></i>
                    </Col>
                    <Col className="skill col-md-auto">
                        <i class="fab fa-react"></i>
                    </Col>
                    <Col className="skill col-md-auto">
                        <i class="fab fa-sass"></i>
                    </Col>
                    <Col className="skill col-md-auto">
                        <i class="fas fa-database"></i>
                    </Col>
                    <Col className="skill col-md-auto">
                        <i class="fab fa-digital-ocean"></i>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;