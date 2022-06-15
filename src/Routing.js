import NewPost from './Pages/NewPost'
import PostPage from './Pages/PostPage'
import About from './Pages/About'
import Missing from './Pages/Missing'
import Home from './Pages/Home'
import EditPost from './Pages/EditPost'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes} from 'react-router-dom'
import { DataProvider } from './contextAPI/DataContext'



const Routing = () => {
  return (
    <>
      <Header title='My Blogs'  />
      <DataProvider>  
        <Nav  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/post' element={<NewPost />} /> 
          <Route  path='/edit/:id' element={<EditPost />} />      
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
      
      </>
  )
}

export default Routing