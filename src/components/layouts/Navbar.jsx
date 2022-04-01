import DropDown from "./Dropdown"
import { faChartSimple, faMagnifyingGlass, faRobot, faGlobe, faStar, faParagraph } from '@fortawesome/free-solid-svg-icons'
import { faMailchimp, faYoutube, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"


const Navbar = () => {
  const seoItems = [
    { 'icon': '', 'text': 'Keyword Research Tool' }, 
    { 'icon': '', 'text': 'Bulk Keyword Data Tool' }, 
    { 'icon': '', 'text': 'Questions Explorer' }, 
    { 'icon': '', 'text': 'Backlinks Checker' }, 
    { 'icon': '', 'text': 'Backlinks List' }, 
    { 'icon': '', 'text': 'High CPC Keywords' },
    { 'icon': '', 'text': 'SEO Analyzer' }
  ];
  
  const youtubeItems = [
    { 'icon': faYoutubeSquare, 'text': 'YouTube Keyword Tool' },
    { 'icon': faParagraph, 'text': 'Topic Explorer' }
  ];

  const aiItems = [
    { 'icon': faYoutubeSquare, 'text': 'Content Generator' },
    { 'icon': faParagraph, 'text': 'Paragraph Translator' }
  ];

  const emailItems = [
    { 'icon': '', 'text': 'Email Validation Tool' }, 
    { 'icon': '', 'text': 'Bulk Email Validation' }, 
    { 'icon': '', 'text': 'Email TXT Extraction Tool' }, 
    { 'icon': '', 'text': 'Warmup Schedule Generator' }, 
    { 'icon': '', 'text': 'Subject Line Tester' },
  ];

  const discoverItems = [
    { 'icon': '', 'text': 'High CPC Keywords' }, 
    { 'icon': '', 'text': 'Influencers' }, 
    { 'icon': '', 'text': 'Instagram Hashtags' }, 
    { 'icon': '', 'text': 'Affiliate Programs' }, 
  ];

  const webtoolItems = [
    { 'icon': '', 'text': 'Privacy Policy Generator' }, 
    { 'icon': '', 'text': 'Terms & Conditions Generator' }, 
    { 'icon': '', 'text': 'Fast Domain Search' }, 
    { 'icon': '', 'text': 'Text Sharing' }, 
  ];

  const moreItems = [
    { 'icon': '', 'text': 'Guides' }, 
    { 'icon': '', 'text': 'Z-educate' }, 
    { 'icon': '', 'text': 'Z-educate Forums' }, 
    { 'icon': '', 'text': 'Link URL Tracker' }, 
    { 'icon': '', 'text': 'Fast Domain Search' }, 
    { 'icon': '', 'text': 'InQuick Sticks' }, 
    { 'icon': '', 'text': 'Super Email Sender' }, 
  ];

  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-10 shadow-lg'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>

        <a href='https://flowbite.com' className='flex items-center'>
          {/*<img className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' />*/}
          <span className='self-center text-xl font-semibold whitespace-nowrap text-stone-900'>RokuOne</span>
        </a>

        <button data-collapse-toggle='mobile-menu-2' type='button' className='inline-flex duration-500 items-center p-2 ml-1 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='mobile-menu-2' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
          <svg className='hidden w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
        </button>

        <div className='hidden mr-0 justify-between items-center w-full md:flex md:w-auto md:order-1' id='mobile-menu-2'>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium'>
            <li>
              <DropDown text='SEO' icon={faChartSimple} options={seoItems} />
            </li>
            <li>
              <DropDown text='YouTube' icon={faYoutube} options={youtubeItems} />
            </li>
            <li>
              <DropDown text='AI' icon={faRobot} options={aiItems} />
            </li>
            <li>
              <DropDown text='Email' icon={faMailchimp} options={emailItems} />
            </li>
            <li>
              <DropDown text='Discover' icon={faMagnifyingGlass} options={discoverItems} />
            </li>
            <li>
              <DropDown text='Web Tools' icon={faGlobe} options={webtoolItems} />
            </li>
            <li>
              <DropDown text='More' icon={faStar} options={moreItems} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar