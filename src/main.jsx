import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tasks from './views/Tasks';
import Edit from './components/Edit/Edit.jsx';
import Delete from './components/Delete/Delete.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks />,
    children: [
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "delete",
        element: <Delete />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
