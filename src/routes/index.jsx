import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Container, Content} from 'react-bulma-components'

function AppRout(){
  return(
  <Container>
  <Contact>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={{
          pathname: '/contact',
          serch: '?sort=name',
          state: {fromHome: true}
        }}>Contact</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about"  element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </Contact>
  </Container>
  )
}

export default AppRout

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>
const Contact = () => <h1>Contact Page</h1>




//memo1 <Route path="/" exact element={<Home />}/>
//`exact` prop can be useful in scenarios where you want to ensure that a route only matches 
//when the URL exactly matches the defined path, and not for partial matches.

