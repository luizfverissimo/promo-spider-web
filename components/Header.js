import Logo from './Logo';

function Header() {
  return (
    <div className='flex items-center justify-start w-full py-4'>
      <a className='flex items-center justify-center gap-2 cursor-pointer'>
        <Logo />
        <h1 className='text-2xl font-bold font-epilogue text-theme-black'>
          Promo Spider
        </h1>
      </a>
    </div>
  );
}

export default Header;
