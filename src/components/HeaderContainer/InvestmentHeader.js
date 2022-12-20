import React from 'react';
import InvestmentPhrase from '../../components/HeaderPhrase/Investment';
import { Container } from '../container';
import '../../styles/components/investment.scss';


const InvestmentHeader = () => {
    return (
        <header className='investmentHeader '>
            <Container>
                <InvestmentPhrase />
            </Container>
        </header>
    )
}

export default InvestmentHeader
