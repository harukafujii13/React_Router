import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App(){
  return(
  <Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </nav>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/page1" element={<h1>Page1</h1>}/>
      <Route path="/page2" element={<h1>Page2</h1>}/>
    </Routes>
  </Router>
  )
}

export default App

function Home(){
  return <h1>Home Page</h1>
}
