



const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        {/* <Image src='/logo1.jpeg' alt='logo' width={118} height={18} className='object-contain' /> */}
        <p className='text-base text-gray-700'>
          AfricanAttires 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 AfricanAttires. All rights reserved</p>

    
    </div>
  </footer>
);

export default Footer;