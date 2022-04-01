import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({icon, text}) => {
  return (
    <div className='text-center my-6'>
        <div className='my-1 p-5'>
            <div className='text-6xl py-10 rounded-full text-sky-600 hover:text-white hover:bg-sky-600 duration-500 border border-gray-500'>
                <FontAwesomeIcon icon={icon} />
            </div>
        </div>
        <h1 className='text-stone-500 font-medium text-sm'>{text}</h1>
    </div>
  )
}

export default Card