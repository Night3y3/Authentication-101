import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing Components
import Username from './components/username';
import Password from './components/password';
import Register from './components/register';
import Profile from './components/profile';
import Recovery from './components/recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

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
    </main>
  )
}

export default App
