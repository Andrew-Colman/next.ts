import Head from 'next/head';
import Link from 'next/link';
import api from '@services/http/api.client';

import { GetStaticProps } from 'next';

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto">
                <main className="">
                    <code>{JSON.stringify(data)}</code>

                    <Link href="/counter">
                        <div className="text-blue-400 hover:text-blue-600 cursor-pointer">
                            {' '}
                            Counter page ↗
                        </div>
                    </Link>
                </main>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ctx => {
    const data = await api.get('/');

    return {
        props: { data },
    };
};
