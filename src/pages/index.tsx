import Head from 'next/head';
import Link from 'next/link';
import api from '@services/http/api.client';

import { GetStaticProps } from 'next';
import { Code } from '@chakra-ui/react';

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto h-screen text-center p-20">
                <main>
                    <Code>{JSON.stringify(data)}</Code>

                    <Link href="/counter">
                        <div className="text-blue-400 hover:text-blue-600 cursor-pointer mt-4">
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
