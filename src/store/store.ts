import create from 'zustand';
import { fetchCount } from '@features/counter/counter.api';
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    incrementByAmount: (amount: number) => void;
    incrementAsync: (amount: number) => void;
    incrementIfOdd: (amount: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
    incrementByAmount: (amount: number) =>
        set(state => ({ count: (state.count += amount) })),
    incrementAsync: async (amount: number) => {
        const { data } = await fetchCount(amount);
        set(state => ({ count: (state.count += data) }));
    },
    incrementIfOdd: async (amount: number) => {
        const currentValue = get().count;
        if (currentValue % 2 === 1)
            set(state => ({ count: (state.count += amount) }));
    },
}));
