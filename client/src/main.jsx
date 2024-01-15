import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Styles
// import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

// Page components
import App from './App.jsx'
import Home from './components/Home.jsx'
import BookIndex from './components/BookIndex.jsx'
import BookCreate from './components/BookCreate.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'

// Loaders
import { getAllBooks } from './utilities/loaders/books.js'

// Router

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books/',
        element: <BookIndex />,
        loader: getAllBooks
      },
      {
        path: '/books/create',
        element: <BookCreate />,
      },
      {
        path: '/register/',
        element: <Register />,
      },
      {
        path: '/login/',
        element: <Login />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router} />
)
