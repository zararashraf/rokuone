import { faPencil, faCopy, faA, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../components/Card'


const Home = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-12 px-24'>
        <div className='col-span-2 px-12'>
            <div className='heading text-center py-4'>
                <h1 className='text-3xl text-gray-600 font-semibold py-2'><span className='text-sky-600'>Text Content</span> Tools</h1>
                <p className='text-xl text-gray-800 font-light'>A complete set of text tools is now at your fingertips. Check plagiarism, rewrite an article, run a spell checker, count words or change text case.</p>
                <div className='grid grid-cols-4 gap-4'>
                    <Card icon={faCopy} text='Plagiarism Checker' />
                    <Card icon={faPencil} text='Article Rewriter' />
                    <Card icon={faA} text='Grammar Check' />
                    <Card icon={faFileWord} text='Word Counter' />
                </div>
            </div>
        </div>
        <div className='col-span-1 px-12 mt-5'>
            <h1 className='text-8xl bg-red-700 border-dashed border-white border-4 text-center text-white rounded-sm'>Ads</h1>
        </div>
    </div>
  )
}

export default Home