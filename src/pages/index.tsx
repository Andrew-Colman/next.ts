import Head from 'next/head';
import Link from 'next/link';
import api from '@services/http/api.client';

import { GetStaticProps } from 'next';
import { Code } from '@chakra-ui/react';
import DisplayJson from '@components/DisplayJson';
import { DateResponse } from '@services/http/api.types';

type HomeProps = { data: DateResponse };

export default function Home({ data }: HomeProps) {
    return (
        <>
            <Head>
                <title>Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto h-screen text-center p-20">
                <main>
                    <Code>
                        <DisplayJson jsonObject={data} />
                    </Code>

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
    const data = await api.getDate();

    return {
        props: { data },
    };
};
