import Example from '@components/Example';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Your title here!</title>
      </Head>

      <Example color="#d40a0a">teste</Example>
    </div>
  );
};

export default Home;
