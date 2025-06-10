const Footer = () => {
  return (
    <footer className='bg-secondary text-white py-8'>
      <div className='section-padding text-center'>
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className='mt-2 text-gray-400'>Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
