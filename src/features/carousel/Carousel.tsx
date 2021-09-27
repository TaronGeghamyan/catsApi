import React, {useEffect, useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    setByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from './CarouselSlice';
import styles from './Carousel.module.css';
import {useLocation} from "react-router";

export function Carousel() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [inputAmount, setInputAmount] = useState('2');
    const location = useLocation();
    const inputValue = Number(inputAmount) || 0;
    const path = "https://api.thecatapi.com/v1/images/search";
    const [state, setState] = useState<any>([]);
    const [page, setPage] = useState<number>(1);

    async function nextPage(){
        try {
            const response = await fetch(path+location.search);
            const result = await response.json();
            setState((prevState: any) => {
                return [...prevState || [], ...result];
            })
            await setPage(prevPage => {return ++prevPage})
            console.log(state)
        } catch (err) {
            console.log(err)
        }
    }

    // useEffect()
    useEffect(  () => {
        console.log(location.search)
        async function  getData() {
            try {
                setState([]);
                const response = await fetch(path+location.search);
                const result = await response.json();
                await setState(result)
                setPage(1);
                await console.log(state)
            } catch (err) {
                console.log(err)
            }
        }
        getData()

    }, [location.search])


    return (
        <div>



                {state.map( (data:{url: string, id: string}) => {

                    return <div key={data.id} className={styles.gallery}>
                        <img srcSet={data.url} alt="Cinque Terre" width="600" height="400" />

                    </div>;
                })}



            <div className={styles.row}>
                <button onClick={nextPage}>More</button>
            </div>

        </div>
    );
}
