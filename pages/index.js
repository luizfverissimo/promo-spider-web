import Head from 'next/head';
import { FaTelegramPlane } from 'react-icons/fa';
import admin from '../services/firebaseNode';

import Card from '../components/Card';
import Header from '../components/Header';

export default function Home({ offersData }) {
  return (
    <div className='w-screen min-h-screen bg-theme-white flex flex-col items-center'>
      <Head>
        <title>Promo Spider - Todas as ofertas</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-full max-w-screen-xl flex flex-col items-center px-6 xl:px-0'>
        <Header />

        <section className='w-full flex flex-col items-center'>
          <div className='w-full flex justify-between items-center mt-9 flex-col  md:flex-row'>
            <div className='w-full flex flex-col items-center mb-4 md:mb-0 md:items-start'>
              <p className='font-archivo font-normal text-lg text-theme-gray'>
                MacOfertas
              </p>
              <h2 className='font-epilogue font-bold text-2xl text-theme-black'>
                Todas as ofertas
              </h2>
            </div>
            <a
              href='https://t.me/macofertas'
              target='_blank'
              re-='noopener noreferrer'
              className='flex justify-center items-center bg-theme-gray text-theme-white px-4 py-3 rounded-xl whitespace-nowrap font-epilogue font-bold text-theme-white cursor-pointer transition-all hover:brightness-110 gap-2'
            >
              Entrar para o grupo do Telegram <FaTelegramPlane />
            </a>
          </div>

          <div className='w-full flex flex-wrap justify-around mt-11 gap-6'>
            {offersData.map((offer) => (
              <Card key={offer.id} data={offer} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const db = admin.firestore();
  let offersData = [];

  const snapshot = await db.collection('offers').limit(20).get();
  snapshot.forEach((item) => {
    const data = item.data();
    offersData.push(data);
  });

  return {
    props: { offersData }
  };
};
