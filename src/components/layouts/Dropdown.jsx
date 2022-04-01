import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown({text, icon, options}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-black hover:border-teal-900 duration-500">
          <FontAwesomeIcon icon={icon} className="mr-1 h-5 w-5 text-xs" />
          {text}  
          <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-5 w-2 text-xs" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
                <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-300 duration-800' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {option.icon ? <FontAwesomeIcon icon={option.icon} className="mr-1 text-xs" /> : ''}
                    {option.text}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
