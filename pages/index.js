import Head from 'next/head';
import { FaTelegramPlane } from 'react-icons/fa';
import admin from '../services/firebaseNode';

import Card from '../components/Card';
import Header from '../components/Header';
import LogoWhite from '../components/LogoWhite';

export default function Home({
  macOffersData,
  smartphoneOffersData,
  gamerOffersData
}) {
  return (
    <div className='flex flex-col items-center w-screen min-h-screen bg-theme-white'>
      <Head>
        <title>Promo Spider - Todas as ofertas</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center w-full max-w-screen-xl px-6 xl:px-0'>
        <Header />

        <section className='flex flex-col items-center w-full mb-9'>
          <div className='flex flex-col items-center justify-between w-full mt-9 md:flex-row'>
            <div className='flex flex-col items-center w-full mb-4 md:mb-0 md:items-start'>
              <p className='text-lg font-normal font-archivo text-theme-gray'>
                🍎 MacOfertas
              </p>
              <h2 className='text-2xl font-bold font-epilogue text-theme-black'>
                Todas as ofertas
              </h2>
            </div>
            <a
              href='https://t.me/macofertas'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 px-4 py-3 font-bold transition-all cursor-pointer bg-theme-gray text-theme-white rounded-xl whitespace-nowrap font-epilogue hover:brightness-110'
            >
              Entrar para o grupo do Telegram <FaTelegramPlane />
            </a>
          </div>

          <div className='flex flex-wrap justify-around w-full gap-6 mt-11'>
            {macOffersData.map((offer) => (
              <Card key={offer.id} data={offer} />
            ))}
          </div>
        </section>

        <section className='flex flex-col items-center w-full mb-9'>
          <div className='flex flex-col items-center justify-between w-full mt-9 md:flex-row'>
            <div className='flex flex-col items-center w-full mb-4 md:mb-0 md:items-start'>
              <p className='text-lg font-normal font-archivo text-theme-gray'>
                🎮 GamerOfertas
              </p>
              <h2 className='text-2xl font-bold font-epilogue text-theme-black'>
                Todas as ofertas
              </h2>
            </div>
            <a
              href='https://t.me/gamerofertas'
              target='_blank'
              re-='noopener noreferrer'
              className='flex items-center justify-center gap-2 px-4 py-3 font-bold transition-all cursor-pointer bg-theme-gray text-theme-white rounded-xl whitespace-nowrap font-epilogue hover:brightness-110'
            >
              Entrar para o grupo do Telegram <FaTelegramPlane />
            </a>
          </div>

          <div className='flex flex-wrap justify-around w-full gap-6 mt-11'>
            {gamerOffersData.map((offer) => (
              <Card key={offer.id} data={offer} />
            ))}
          </div>
        </section>

        <section className='flex flex-col items-center w-full mb-14'>
          <div className='flex flex-col items-center justify-between w-full mt-9 md:flex-row'>
            <div className='flex flex-col items-center w-full mb-4 md:mb-0 md:items-start'>
              <p className='text-lg font-normal font-archivo text-theme-gray'>
                📱 Smartphone Ofertas
              </p>
              <h2 className='text-2xl font-bold font-epilogue text-theme-black'>
                Todas as ofertas
              </h2>
            </div>
            <a
              href='https://t.me/smartphoneOfertas'
              target='_blank'
              re-='noopener noreferrer'
              className='flex items-center justify-center gap-2 px-4 py-3 font-bold transition-all cursor-pointer bg-theme-gray text-theme-white rounded-xl whitespace-nowrap font-epilogue hover:brightness-110'
            >
              Entrar para o grupo do Telegram <FaTelegramPlane />
            </a>
          </div>

          <div className='flex flex-wrap justify-around w-full gap-6 mt-11'>
            {smartphoneOffersData?.map((offer) => (
              <Card key={offer.id} data={offer} />
            ))}
          </div>
        </section>
      </main>
      <footer className='flex items-center justify-center w-full py-6 bg-theme-black'>
        <a className='flex items-center justify-center gap-2 cursor-pointer'>
          <LogoWhite />
          <h4 className='text-lg font-bold font-epilogue text-theme-white'>
            Promo Spider
          </h4>
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const db = admin.firestore();
  let macOffersData = [];
  let smartphoneOffersData = [];
  let gamerOffersData = [];

  const snapshotMacOffers = await db
    .collection('macoffer')
    .orderBy('timestamp', 'desc')
    .limit(8)
    .get();
  snapshotMacOffers.forEach((item) => {
    let data = item.data();
    data.timestamp = data.timestamp.toDate().toString();
    macOffersData.push(data);
  });

  const snapshotGamerOffers = await db
    .collection('gameroffers')
    .orderBy('timestamp', 'desc')
    .limit(8)
    .get();
  snapshotGamerOffers.forEach((item) => {
    let data = item.data();
    data.timestamp = data.timestamp.toDate().toString();
    gamerOffersData.push(data);
  });

  const snapshotSmartphoneOffers = await db
    .collection('smartphoneoffers')
    .orderBy('timestamp', 'desc')
    .limit(8)
    .get();
  snapshotSmartphoneOffers.forEach((item) => {
    let data = item.data();
    data.timestamp = data.timestamp.toDate().toString();
    smartphoneOffersData.push(data);
  });

  return {
    props: { macOffersData, gamerOffersData, smartphoneOffersData }
  };
};
