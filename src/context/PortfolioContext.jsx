import { createContext, useEffect, useState } from "react"


export const PortfolioContext = createContext();



const PortfolioContextProvider = (props) => {
  const [projectId, setProjectId] = useState(0);
  const [displayProject,setDisplayProject] = useState(false);
  const [cert, setCert] = useState(1);
  const [displayImg,setDisplayImg] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editable, setEditable] = useState({});
  const [refresh,setRefresh] = useState(false);
  
  const chunkProjects = (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    };
    const api  = "https://myportfolio-fs.onrender.com/api/collection"

  const value = {api,projectId, setProjectId,displayProject,setDisplayProject,cert,setCert,chunkProjects,displayImg,setDisplayImg,isAuthenticated, setIsAuthenticated,editable,setEditable,setRefresh,refresh};  
  return (
    <PortfolioContext.Provider value={value}>
      {props.children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContextProvider