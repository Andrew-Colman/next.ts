import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '@styles/tailwind.css';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
