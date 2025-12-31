import {Link } from "react-router-dom"
function NavBar() {

  return (
   <div className="container">
    <Link to="/" className="link">
      BootCamp17
    </Link>
    <nav className="container">
      <Link to="/comment" className="link">
      Comment 
      </Link>
      <Link to="/clock" className="link">
      Clock 
      </Link>
      <Link to="/imageList" className="link">
      Image 
      </Link>
      <Link to="/YoutubeList" className="link">
      Image 
      </Link>
    </nav>
   </div>
  )
}

export default NavBar
