import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Styles
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

// Page components
import App from './App.jsx'
import Home from './components/Home.jsx'
import BookIndex from './components/BookIndex.jsx'
import BookCreate from './components/BookCreate.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import SingleBook from './components/SingleBook.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import BookEdit from './components/BookEdit.jsx'

// Loaders 
import { getAllBooks, getSingleBook } from './utilities/loaders/books.js'

// Actions
import { loginUser, registerUser } from './utilities/actions/auth.js'
import { createBook, editBook, deleteBook } from './utilities/actions/books.js'

// Router

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: '/books/:bookId/',
        element: <SingleBook />,
        loader: async ({ params }) => getSingleBook(params.bookId),
        action: async ({ params }) => deleteBook(params.bookId)
      },
      {
        path: '/books/create/',
        element: <BookCreate />,
        action: async ({ request }) => createBook(request),
      },
      {
        path: '/books/:bookId/edit/',
        element: <BookEdit />,
        action: async ({ request, params }) => editBook(request, params.bookId),
        loader: async ({ params }) => getSingleBook(params.bookId)
      },
      {
        path: '/register/',
        element: <Register />,
        action: async ({ request }) => registerUser(request),
      },
      {
        path: '/login/',
        element: <Login />,
        action: async ({ request }) => loginUser(request),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
