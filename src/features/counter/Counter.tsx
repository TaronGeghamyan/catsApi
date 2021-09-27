import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  setByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [inputAmount, setInputAmount] = useState('2');

  const inputValue = Number(inputAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(inputValue))}
        >
          Add Amount
        </button>
        <button
            className={styles.button}
            onClick={() => dispatch(setByAmount(inputValue))}
        >
          Set Amount
        </button>
        
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(inputValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(inputValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
