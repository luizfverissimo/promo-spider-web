import Head from 'next/head';
import Link from 'next/link';
import admin from '../../services/firebaseNode';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { BiArrowBack } from 'react-icons/bi';

function OfferPage({ offerData }) {
  return (
    <div className='flex flex-col items-center w-screen min-h-screen bg-theme-white'>
      <Head>
        <title>Promo Spider - {offerData.title || Oferta}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center w-full max-w-screen-xl px-6 xl:px-0'>
        <Header />

        <section className='flex flex-col items-center w-full'>
          <div className='flex flex-col items-center justify-between w-full mt-9 md:flex-row'>
            <div className='flex flex-col items-center w-full mb-4 md:mb-0 md:items-start'>
              <p className='text-lg font-normal font-archivo text-theme-gray'>
                📱 Smartphone Ofertas
              </p>
              <Link href='/'>
                <a className='flex items-center justify-center gap-2 px-4 py-3 font-bold transition-all cursor-pointer bg-theme-gray text-theme-white rounded-xl whitespace-nowrap font-epilogue hover:brightness-110' >
                  <BiArrowBack /> Voltar para todas as ofertas
                </a>
              </Link>
            </div>
          </div>

          <div className='flex items-center justify-around w-full mt-11'>
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

  const snapshot = await db.collection('promotools').doc(params.id).get();
  const offerData = snapshot.data();
  return {
    props: { offerData }
  };
}
