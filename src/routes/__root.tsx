import Footer from '@layout/footer'
import Header from '@layout/header'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
   component: () => (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   ),
})
