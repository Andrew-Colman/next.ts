import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Counter from '@features/counter/Counter';

function CounterPage<NextPage>() {
    return (
        <>
            <div className="container">
                <Head>
                    <title>Counter</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <header className="header">
                    <Counter />
                    <Link href="/">
                        <span className="link"> Home page ↗</span>
                    </Link>
                </header>
            </div>
            <style jsx>{`
                .container {
                    text-align: center;
                }
                .header {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: calc(10px + 2vmin);
                }
                .link {
                    color: rgb(112, 76, 182);
                    cursor: pointer;
                    margin-top: 2rem;
                }
            `}</style>
        </>
    );
}

export default CounterPage;
