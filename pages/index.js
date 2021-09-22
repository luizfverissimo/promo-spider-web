import Head from 'next/head';
import Image from 'next/image';
import { getDatabase, ref, onValue, query, limitToLast } from 'firebase/database';

import { app } from '../services/firebase';

import Card from '../components/Card';
import Logo from '../components/Logo';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Home({ offersData }) {
  return (
    <div className='w-screen min-h-screen bg-theme-white flex flex-col items-center'>
      <Head>
        <title>Promo Spider - Todas as ofertas</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-full max-w-screen-xl flex flex-col items-center px-6 xl:px-0'>
        <div className='w-full py-4 flex justify-start items-center'>
          <a className='flex items-center justify-center gap-2 cursor-pointer'>
            <Logo />
            <h1 className='font-epilogue font-bold text-2xl text-theme-black'>
              Promo Spider
            </h1>
          </a>
        </div>

        <section className='w-full flex flex-col items-center'>
          <div className='w-full flex justify-between items-center mt-16 flex-col  md:flex-row'>
            <div className='w-full flex flex-col items-center mb-4 md:mb-0 md:items-start'>
              <p className='font-archivo font-normal text-lg text-theme-gray'>
                MacOfertas
              </p>
              <h2 className='font-epilogue font-bold text-2xl text-theme-black'>
                Todas as ofertas
              </h2>
            </div>
            <a className='flex justify-center items-center bg-theme-gray text-theme-white px-4 py-3 rounded-xl whitespace-nowrap font-epilogue font-bold text-theme-white cursor-pointer transition-all hover:brightness-110 gap-2'>
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

export const getStaticProps = async (context) => {
  const db = getDatabase(app);
  let offersData = [];

  const offersRef = query(ref(db, 'offers/'), limitToLast(20));
  onValue(offersRef, (snapshot) => {
    snapshot.forEach((item) => {
      const data = item.val();
      offersData.push(data);
    });
  });

  offersData.reverse()
  
  return {
    props: { offersData },
    revalidate: 60
  };
};