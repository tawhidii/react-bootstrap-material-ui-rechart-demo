
import React from 'react';
import { Card,Button} from 'react-bootstrap';
const BreakingNews = (props) => {
    console.log(props)
    const {title,description,urlToImage,url} = props.news
    console.log(url)
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary" onClick={()=>window.open(`${url}`,'_blank')}>Read News</Button>
        </Card.Body>
    </Card>
    );
};

export default BreakingNews;