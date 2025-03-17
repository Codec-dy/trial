import { useContext, useState } from 'react'
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify';
import './App.css'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProjectPage from './pages/ProjectPage'
import Certificates from './pages/Certificates'
import Certificate from './pages/Certificate'
import Footer from './components/Footer'
import GraphicDesign from './pages/GraphicDesign'
import { AnimatePresence,motion } from 'framer-motion'
import Admin from './pages/adminPages/Admin'
import Admindashboard from './pages/adminPages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import { PortfolioContext } from './context/PortfolioContext'
import AdminProjects from './pages/adminPages/Projects'
import AdminCertificate from './pages/adminPages/Certificates'
import AdminExperience from './pages/adminPages/Experience'
import AdminSkills from './pages/adminPages/Skills'
import AdminWebSettings from './pages/adminPages/WebSettings'


function App() {
  const {isAuthenticated} = useContext(PortfolioContext);
  const location = useLocation()
  let checkLoc = location.pathname.includes('admin')
  return (
    <AnimatePresence mode="wait">
     <div className={!checkLoc?'p-4 sm:px-[5vw]':''}>{/*className='p-4 sm:px-[5vw]' */}
    
    {!checkLoc && <Navbar /> }
    <Routes>
        <Route path="/" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Landing /></motion.div>} />
        <Route path="/contact" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Contact /></motion.div>} />
        <Route path="/projects" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Projects /></motion.div>} />
        <Route path="/project/:id" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><ProjectPage /></motion.div>} />
        <Route path="/about" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><About /></motion.div>} />
        <Route path="/certificates" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Certificates /></motion.div>} />
        <Route path="/certificate" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Certificate /></motion.div>} />
        <Route path="/project/graphicdesign/:id" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><GraphicDesign/></motion.div>} />
      
        <Route path="/admin" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            > <Admin /></motion.div>} />
          
        <Route path="/admin/dashboard" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                ><Admindashboard /></motion.div>
              </PrivateRoute>
            }/>
        <Route path="/admin/dashboard/projects" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                ><AdminProjects /></motion.div>
              </PrivateRoute>
            } />
          <Route path="/admin/dashboard/certificates" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                ><AdminCertificate/></motion.div>
              </PrivateRoute>
            } />
          <Route path="/admin/dashboard/Skills" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                ><AdminSkills /></motion.div>
              </PrivateRoute>
            } />
            <Route path="/admin/dashboard/experience" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                ><AdminExperience /></motion.div>
              </PrivateRoute>
            } />
            <Route path="/admin/dashboard/websettings" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                ><AdminWebSettings /></motion.div>
              </PrivateRoute>
            } />
      </Routes>
      
      {!checkLoc && <Footer />}
      <ToastContainer/>
      
      </div>
    </AnimatePresence>
  )
}

export default App
