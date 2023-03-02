//import styles from './styles/app.module.scss';
//import { useEffect, useState } from 'react';
import React from 'react';
import ShowTime from './components/ShowTime/ShowTime';
import Container from './components/Container/Container';

function App (){
    return(
    <Container>
        <ShowTime />
    </Container>
    )
}

export default App;