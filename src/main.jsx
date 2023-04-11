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
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: jobsData,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/:id',
        element: <JobDetail></JobDetail>,
        loader: jobsData
      },
      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>,
        loader: ()=>fetch('assignment.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster></Toaster>
  <RouterProvider router={router} />
  </>
)
