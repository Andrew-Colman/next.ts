import { setup, screen } from '@utils/test-utils';

import Counter from '../Counter';
import { useCounterStore } from '@store/store';

jest.mock('../counter.api', () => ({
    fetchCount: (amount: number) =>
        new Promise<{ data: number }>(resolve =>
            setTimeout(() => resolve({ data: amount }), 500)
        ),
}));

const originalState = useCounterStore.getState();
beforeEach(() => {
    useCounterStore.setState(originalState);
});

describe('<Counter />', () => {
    it('renders the component', () => {
        setup(<Counter />);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('decrements the value', async () => {
        const { user } = setup(<Counter />);

        const counter = screen.getByTestId('counter-value');

        const decrementBtn = screen.getByRole('button', {
            name: /decrement value/i,
        });

        await user.click(decrementBtn);

        expect(counter).toHaveTextContent('-1');
    });

    it('increments the value', async () => {
        const { user } = setup(<Counter />);

        await user.click(
            screen.getByRole('button', { name: /increment value/i })
        );

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('increments by amount', async () => {
        const { user } = setup(<Counter />);

        await user.type(
            screen.getByLabelText(/set increment amount/i),
            '{backspace}5'
        );
        await user.click(screen.getByRole('button', { name: /add amount/i }));

        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('increments async', async () => {
        const { user } = setup(<Counter />);

        await user.type(
            screen.getByLabelText(/set increment amount/i),
            '{backspace}3'
        );
        await user.click(screen.getByRole('button', { name: /add async/i }));

        await expect(screen.findByText('3')).resolves.toBeInTheDocument();
    });

    it('increments if amount is odd', async () => {
        const { user } = setup(<Counter />);

        await user.click(screen.getByRole('button', { name: /add if odd/i }));

        expect(screen.getByText('0')).toBeInTheDocument();

        await user.click(
            screen.getByRole('button', { name: /increment value/i })
        );
        await user.type(
            screen.getByLabelText(/set increment amount/i),
            '{backspace}8'
        );
        await user.click(screen.getByRole('button', { name: /add if odd/i }));

        await expect(screen.findByText('9')).resolves.toBeInTheDocument();
    });
});
