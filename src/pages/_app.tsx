import { AppProps } from 'next/app';

import '@styles/tailwind.css';

import Providers from './_providers';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
}
export default MyApp;
