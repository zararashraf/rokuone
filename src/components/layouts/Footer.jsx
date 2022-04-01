const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='container p-10 bg-gray-900 mx-auto bottom-0 fixed'>
        <p className='text-white'>Copyright &copy; {footerYear} All rights reserved.</p>
    </footer>
  )
}

export default Footer