import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import News from '../News/News';

const Header = () => {
    return (
        <>
        <Jumbotron>
            <h1>Latest News</h1>
        </Jumbotron>
        <News></News>
        </>
    )
};

export default Header;