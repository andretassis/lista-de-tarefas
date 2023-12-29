import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tasks from './views/Tasks';
import Edit from './components/Edit/Edit.jsx';
import Delete from './components/Delete/Delete.jsx';
import TaskComponent from './components/TaskComponent/TaskComponent.jsx';
import { DB_MOCK } from './mock/db.mock.js';


const router = createBrowserRouter([
  {
    path: "",
    element: <Tasks />,
    children: [
      {
        path: "home",
        element: <TaskComponent data={DB_MOCK} />,
      },
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
