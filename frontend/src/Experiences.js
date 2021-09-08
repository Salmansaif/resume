import './Experiences.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getExperiences } from './redux/ducks/experiencesSlice';
import Moment from 'moment';

const Experiences = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExperiences({ test: "hi", id: 2 }));
    }, [dispatch]);

    const experiences = useSelector((state) => state.experiences);

    return (
        <div className="section experiences">
            <Container>
                <Row>
                    <Col>
                        <h1 className="heading">Experiences</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center g-4" xs={1} md={3}>
                    {experiences && Object.entries(experiences).map(([key, experience]) => (
                    <Col>
                        <Card className="text-center" bg="dark" text="white">
                            <Card.Header as="h5">{experience.company}</Card.Header>
                            <Card.Body className="exp-card">
                                <Card.Title>
                                    {experience.role}
                                    <p>{Moment(experience.start_date).format('Y')} - {Moment(experience.end_date).format('Y')}</p>
                                </Card.Title>
                                <Card.Text>
                                    
                                    {experience.description.split('\n').map(c => {
                                        return ( <p> {c} </p>) 
                                        })
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                    
                    
                    
                    
                </Row>
            </Container>
        </div>
    )
}

export default Experiences;