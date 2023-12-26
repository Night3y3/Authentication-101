import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing Components
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

import { Toaster } from 'react-hot-toast';

// Root Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
])

function App() {

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position='top-center'
        reverseOrder={true}></Toaster>
    </main>
  )
}

export default App
