import Logo from "./Logo";

function Header() {
  return (
    <div className='w-full py-4 flex justify-start items-center'>
      <a className='flex items-center justify-center gap-2 cursor-pointer'>
        <Logo />
        <h1 className='font-epilogue font-bold text-2xl text-theme-black'>
          Promo Spider
        </h1>
      </a>
    </div>
  );
}

export default Header;
