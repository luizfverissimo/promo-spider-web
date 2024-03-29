import Head from 'next/head';
import Link from 'next/link';
import admin from '../../services/firebaseNode';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { BiArrowBack } from 'react-icons/bi';

function OfferPage({ offerData }) {
  return (
    <div className='w-screen min-h-screen bg-theme-white flex flex-col items-center'>
      <Head>
        <title>Promo Spider - {offerData.title || Oferta}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-full max-w-screen-xl flex flex-col items-center px-6 xl:px-0'>
        <Header />

        <section className='w-full flex flex-col items-center'>
          <div className='w-full flex justify-between items-center mt-9 flex-col  md:flex-row'>
            <div className='w-full flex flex-col items-center mb-4 md:mb-0 md:items-start'>
              <p className='font-archivo font-normal text-lg text-theme-gray'>
                🎮 GamerOfertas
              </p>
              <Link href='/'>
                <a className='flex justify-center items-center bg-theme-gray text-theme-white px-4 py-3 rounded-xl whitespace-nowrap font-epilogue font-bold text-theme-white cursor-pointer transition-all hover:brightness-110 gap-2'>
                  <BiArrowBack /> Voltar para todas as ofertas
                </a>
              </Link>
            </div>
          </div>

          <div className='w-full flex justify-around items-center mt-11'>
            <Card key={offerData.id} data={offerData} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default OfferPage;

export async function getServerSideProps({ params }) {
  const db = admin.firestore();

  const snapshot = await db.collection('gameroffers').doc(params.id).get();
  const offerData = snapshot.data();
  return {
    props: { offerData }
  };
}
