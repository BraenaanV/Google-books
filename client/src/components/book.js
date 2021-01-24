import { ListItem } from "./list";
import { Row, Col } from "./grid";

function Book({ title, subtitle, authors, link, description, image, Button}) {
    return(
        <ListItem>
            <Row>
                <Col>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </Col>
                <Col>
                    <a className="btn" target="_blank" rel="noopener noreferrer" href={link}>View Book</a>
                    <Button />
                </Col>
                <Col>
                    <p>Written by : {authors}.</p>                
                </Col>
                <Col>
                    <img className="img-thumbnail img-fluid w-100" src={image} alt = {title}></img>                      
                </Col>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
        </ListItem>
    )
}

export default Book;
