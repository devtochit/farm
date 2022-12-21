import React from 'react';
import AmenityPhrase from '../HeaderPhrase/About';
import { Container } from '../container';
import '../../styles/components/Aboutheader.scss';


const AmenityContainer = () => {
    return (
        <header className='aboutheader'>
            <Container>
                <AmenityPhrase />
            </Container>
        </header>
    )
}

export default AmenityContainer
