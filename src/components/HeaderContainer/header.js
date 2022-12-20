import React from 'react';
import { Container } from '../container';
import '../../styles/components/header.scss';
import Banner from '../../components/Banner/Banner';


const HomeContainer = () => {
    return (
        <header className='homeheader'>
            <Container>
                <Banner />
            </Container>
        </header>
    )
}

export default HomeContainer
