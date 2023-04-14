import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function AppRout(){
  return(
  <Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <NavLink to="/page2" activeClassname="active">Page 2</NavLink> */}
      </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about"  element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </Router>
  )
}

export default AppRout

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>
const Contact = () => <h1>Contact Page</h1>




//memo1 <Route path="/" exact element={<Home />}/>
//`exact` prop can be useful in scenarios where you want to ensure that a route only matches 
//when the URL exactly matches the defined path, and not for partial matches.

