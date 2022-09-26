import { useState } from 'react';

import { useCounterStore } from '@store/store';

function Counter() {
    const count = useCounterStore(state => state.count);

    const {
        decrement,
        increment,
        incrementByAmount,
        incrementAsync,
        incrementIfOdd,
    } = useCounterStore();

    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <>
            <div>
                <div className="counter__row">
                    <button
                        className="counter__button"
                        aria-label="Decrement value"
                        onClick={decrement}
                    >
                        -
                    </button>
                    <span
                        data-testid="counter-value"
                        className="counter__value"
                    >
                        {count}
                    </span>
                    <button
                        className="counter__button"
                        aria-label="Increment value"
                        onClick={increment}
                    >
                        +
                    </button>
                </div>
                <div className="counter__row row__2">
                    <input
                        className="counter__textbox"
                        aria-label="Set increment amount"
                        value={incrementAmount}
                        onChange={e => setIncrementAmount(e.target.value)}
                    />
                    <button
                        className="counter__button"
                        onClick={() => incrementByAmount(incrementValue)}
                    >
                        Add Amount
                    </button>
                    <button
                        className="counter__button counter__asyncButton"
                        onClick={() => incrementAsync(incrementValue)}
                    >
                        Add Async
                    </button>
                    <button
                        className="counter__button"
                        onClick={() => incrementIfOdd(incrementValue)}
                    >
                        Add If Odd
                    </button>
                </div>
            </div>
            <style jsx>{`
                .counter__row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .counter__row > button {
                    margin-left: 4px;
                    margin-right: 8px;
                }
                .counter__row:not(:last-child) {
                    margin-bottom: 16px;
                }
                .counter__value {
                    font-size: 78px;
                    padding-left: 16px;
                    padding-right: 16px;
                    margin-top: 2px;
                    font-family: 'Courier New', Courier, monospace;
                }
                .counter__button {
                    appearance: none;
                    background: none;
                    font-size: 32px;
                    padding-left: 12px;
                    padding-right: 12px;
                    outline: none;
                    border: 2px solid transparent;
                    color: rgb(112, 76, 182);
                    padding-bottom: 4px;
                    cursor: pointer;
                    background-color: rgba(112, 76, 182, 0.1);
                    border-radius: 2px;
                    transition: all 0.15s;
                }
                .counter__textbox {
                    font-size: 32px;
                    padding: 2px;
                    width: 64px;
                    text-align: center;
                    margin-right: 4px;
                    border: 2px solid rgba(112, 76, 182, 0.2);
                    border-radius: 0.275rem;
                }
                .counter__button:hover,
                .counter__button:focus {
                    border: 2px solid rgba(112, 76, 182, 0.4);
                }
                .counter__button:active {
                    background-color: rgba(112, 76, 182, 0.2);
                }
                .counter__asyncButton {
                    position: relative;
                }
                .counter__asyncButton:after {
                    content: '';
                    background-color: rgba(112, 76, 182, 0.15);
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    opacity: 0;
                    transition: width 1s linear, opacity 0.5s ease 1s;
                }
                .counter__asyncButton:active:after {
                    width: 0%;
                    opacity: 1;
                    transition: 0s;
                }

                @media (max-width: 768px) {
                    .counter__row.row__2 {
                        flex-direction: column;
                        gap: 1rem;
                    }
                }
            `}</style>
        </>
    );
}

export default Counter;
