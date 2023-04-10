import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import { jobsData } from './utilities/getJobsData';
import JobDetail from './components/JobDetail/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: jobsData,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/job/:id',
        element: <JobDetail></JobDetail>,
        loader: ({params})=> fetch(`${params.id}.json`)
      },
      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
