import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { userLogout } from "../state/auth/authActions";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'PDF-Summarizer', href: '/pdf-summarize', current: false },
  { name: 'Test', href: '/test', current: false },
  { name: 'Timetable', href: '/timetable', current: false },
  { name: 'My Courses', href: '/my-courses', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.authReducer);
  const logoutHandler = async () => {
		try {
			await dispatch(userLogout());
			navigate("/logout")
      window.location.reload();
		} catch (err) {
			console.log("Logout Error: ", err);
		}
	};
  return (
    <Disclosure as="nav" className="relative pt-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-white/5 hover:text-bwhite focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-tight text-gray-800"
                >
                    Spoudazo
                </Link>
            </div>
            <div className="hidden sm:flex items-start border-l-2 border-gray-300 ml-4 mt-2 h-10" />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                 return (
                       <Link key={item.name} to={item.href}
                        aria-current={isActive ? 'page' : undefined} className={classNames(
                        isActive
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-600 hover:bg-white/5 hover:text-indigo-300',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {userInfo ? (
                    <>
                      <button
                        href="/logout"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={logoutHandler}
                      >
                      Logout
                      </button>
                    </>
                    ) : (
                        <>
                          <Link
                            to="/login"
                            className="text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                          Sign in
                          </Link>
                          <span
                            aria-hidden="true"
                            className="h-6 w-px bg-gray-200"
                          />
                          <Link
                            to="/register"
                              className="text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                          Create an account
                          </Link>
                          </>
                      )}
               </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={classNames(
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-white/5 hover:text-indigo-300',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
            
          );
        })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}