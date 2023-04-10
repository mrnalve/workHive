import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css'
export const jobsDataContext = createContext([])
export const appliedContext = createContext([]);

function App() {
  const jobsData = useLoaderData()
  const [appliedData, setAppliedData] = useState([])
  return (
    <jobsDataContext.Provider value={jobsData}>
      <appliedContext.Provider value={[appliedData, setAppliedData]}>
      <div className="App ">
      <Header></Header>
      <>
      <Outlet></Outlet>
      </>
    </div>
      </appliedContext.Provider>
    </jobsDataContext.Provider>
  );
}

export default App;
