const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer class="text-center lg:text-left bg-gray-100 text-gray-600 fixed bottom-0">
      <div class="mx-6 px-36 py-10 text-center md:text-left hidden lg:inline-block">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div class="col-span-2">
            <h6 class="
                uppercase
                font-semibold
                mb-4
                flex
                items-center
                justify-center
                md:justify-start
            ">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
                class="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                </path>
              </svg>
              About Us
            </h6>
            <p className='text-xs text-left'>
              SuperSEOtools is a Professional SEO and blogging tools Platform. 
              Here we will provide you only interesting content, which you will like very much. 
              We're dedicated to providing you the best of SEO and blogging tools, with a focus on dependability and Best tools for bloggers.
            </p>
          </div>
    <div class="ml-20">
      <h6 class="uppercase mb-4 flex justify-center md:justify-start">
        Top 5 Tools
      </h6>
      <p>
        <a href="#!" class="text-gray-600 text-xs">Plagiarism Checker</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600 text-xs">XML Sitemap Generator</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600 text-xs">My IP Address</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600 text-xs">Whois Checker</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600 text-xs">URL Rewriting Tool</a>
      </p>
    </div>
    <div class="">
      <h6 class="uppercase mb-4 flex justify-center md:justify-start">
        Useful links
      </h6>
      <p>
        <a href="#!" class="text-gray-600 text-xs">Home</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600 text-xs">About Us</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600 text-xs">Disclaimer</a>
      </p>
      <p>
        <a href="#!" class="text-gray-600 text-xs">Privacy Policy</a>
      </p>
    </div>
  </div>
</div>
<div class="w-screen bg-gray-800 text-center text-xs p-6 text-white">
  <a class="" href="https://tailwind-elements.com/">SuperSEOTools</a>
  <span> &copy; {footerYear}</span>
</div>
</footer>
  )
}

export default Footer