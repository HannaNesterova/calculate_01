import styles from './ShowTime.module.scss';
import React, { useEffect } from 'react';
import { useState } from 'react';


const ShowTime = () => {
    const[hour, setHour] = useState(0);
    const[min, setMin] = useState(0);
    const[second, setSecond] = useState(0);
    const[mlSecond, setMilSecond] = useState(0);
    const[stop, setStop] = useState(true);

    const onStart = () => {
        setStop(false);
    }
    const onStop = () => {
        setStop(true);
    }

    const onRest = () => {
        setMin(0);
        setHour(0);
        setMilSecond(0);
        setSecond(0);
    }

    useEffect ( () => {
        let interval = null;
        if(!stop){
            interval = setInterval( () => {
                if(min > 59){
                    setHour(hour +1);
                    setMin(0);
                    clearInterval(interval);
                }
                if(second > 59){
                    setMin(min +1);
                    setSecond(0);
                    clearInterval(interval);
                }
                if(mlSecond > 999){
                    setSecond(second +1);
                    setMilSecond(0);
                    clearInterval(interval);
                }
                if(mlSecond <= 999){
                    setMilSecond(mlSecond +1);
                }
            }, 10)
        }
        else{
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    })
    return(
        <div className={styles.main}>
            <h1 className={styles.text}>{hour} : {min} : {second} : {mlSecond}</h1>
            <button className={styles.button} onClick={onStart}>Start</button>
            <button className={styles.button} onClick={onStop}>Stop</button>
            <button className={styles.button} onClick={onRest}>Rest</button>
        </div>
    )
}

export default ShowTime;