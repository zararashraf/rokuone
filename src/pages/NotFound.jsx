import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'>
        <div className='text-center'>
            <div className='max-w-lg mx-auto'>
                <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
                <p className='text-5xl mb-8'>404 - Page not found!</p>
                <Link to='/' className='btn btn-primary btn-lg hover:text-teal-500 duration-75'>
                    <FontAwesomeIcon icon={faHome} className='mr-2' />
                    Back To Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound