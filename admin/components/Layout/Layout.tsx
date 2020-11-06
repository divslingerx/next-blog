import * as React from 'react'
import SidebarNav from './SidebarNav'
import { useTrueFalse, useIsAuthenticated } from '../../hooks'
import AdminHeader from './AdminHeader'
import { Spinner, Container } from '../common'

const Layout: React.FC = ({ children }) => {
  const { hasAuth, user } = useIsAuthenticated()
  const [sidebarIsOpen, openSidebar, closeSidebar] = useTrueFalse(false)
  const signOut = () => {
    return null
  }

  if (hasAuth) {
    return (
      <div className="h-screen">
        <div className="flex  bg-gray-200 font-roboto h-screen">
          {sidebarIsOpen && (
            <div
              onClick={closeSidebar}
              onKeyPress={closeSidebar}
              className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
              aria-label="close-sidebar"
              role="button"
              tabIndex={0}
            />
          )}
          <div
            className={`${
              sidebarIsOpen
                ? 'translate-x-0 ease-out'
                : '-translate-x-full ease-in '
            }  fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-01`}
          >
            <div className="flex items-center justify-center mt-8">
              <div className="items-center column">
                <div
                  className="bg-white rounded-full h-24 w-24
              flex items-center mb-4"
                >
                  <img src="/img/logo.png" alt="logo" />
                </div>
                <div className="text-white text-2xl mx-2 font-semibold text-center">
                  ADMIN
                </div>
              </div>
            </div>
            <SidebarNav />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <AdminHeader
              onBurgerclick={openSidebar}
              userAvatar={user.avatar}
              onSignOut={signOut}
            />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-800 text-white">
              <Container>
                <h3 className="text-gray-700 text-3xl font-medium">
                  Dashboard
                </h3>

                {children}
              </Container>
            </main>
          </div>
        </div>
      </div>
    )
  }
  return <Spinner />
}

export default Layout
