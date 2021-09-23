import { BiLinkExternal } from 'react-icons/bi';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

function createDateFromNow(date) {
  const dateFormat = dayjs(date, 'HH:mm - DD/MM/YYYY');
  const dateFromNow = dayjs().to(dateFormat);

  return dateFromNow;
}

function Card({ data }) {
  return (
    <div className='w-[288px] flex flex-col items-center justify-center pb-6 rounded-xl border-2 bg-white'>
      <img
        src={data.imageLink}
        alt={data.title}
        className='w-auto h-[180px] object-cover'
      />
      <div className='w-full flex-col items-start px-6 mt-6'>
        <h3 className='font-epilogue font-bold text-lg text-theme-black line-clamp-2'>
          {data.title}
        </h3>
        <p className='font-archivo text-theme-gray line-clamp-2'>
          {data.paymentFormat}
        </p>
        <div className='flex flex-col items-center my-4 px-6'>
          <p className='font-archivo text-theme-gray line-through'>
            {data.previousPrice}
          </p>
          <h4 className='font-epilogue font-bold text-xl text-theme-black'>
            {data.offerPrice}
          </h4>
          {data.coupon && (
            <p className='font-archivo text-theme-green'>
              Cupom: <strong>{data.coupon}</strong>
            </p>
          )}
        </div>
      </div>
      <a
        target='_blank'
        rel='noopener noreferrer'
        className='flex mt-auto justify-center items-center bg-theme-black text-theme-white px-4 py-3 rounded-xl whitespace-nowrap font-epilogue font-bold text-theme-white cursor-pointer transition-all hover:brightness-110 gap-2'
        onClick={async () => {
          if (data.coupon) {
            await navigator.clipboard.writeText(data.coupon);
          }
          window.open(data.offerLink, '_blank');
        }}
      >
        Ir à loja <BiLinkExternal />
      </a>
      <p className='font-archivo text-theme-gray mt-1 opacity-50 text-xs'>{createDateFromNow(data.date)}</p>
    </div>
  );
}

export default Card;
