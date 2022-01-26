import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import '@styles/tailwind.css';
import theme from '@styles/theme';

import store from '@store/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
}
export default MyApp;
