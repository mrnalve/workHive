import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
export const jobsDataContext = createContext([])

function App() {
  const jobsData = useLoaderData()
  return (
    <jobsDataContext.Provider value={jobsData}>
      <div className="App ">
      <Header></Header>
      <>
      <Outlet></Outlet>
      </>
    </div>
    </jobsDataContext.Provider>
  );
}

export default App;
