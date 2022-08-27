import { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// re-export everything
export * from '@testing-library/react';

// setup render and user events
export function setup(jsx) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {}

export function renderWithProviders(
    ui: React.ReactElement,
    { ...renderOptions }: ExtendedRenderOptions = {}
) {
    //wrap providers here:
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <>{children}</>;
    }
    return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
