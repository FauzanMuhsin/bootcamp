import './Style.css'
import Comment from "./comment.jsx"
import Clock from "./Clock.jsx"
import UserContext from "./context.jsx"
import ClickCounter from "./useref.jsx"
import ImageList from './imageList.jsx'
import YoutubeList from './YoutubeList.jsx'
import { Routes, Route } from 'react-router-dom'

//  npm run dev => untuk run
//  nanti belajar custom hooks


function App() {
  const user = {
    name: "faza",
    role: "admin",
  };

  return (
    <>
    <main>
      <UserContext value={user}>
        <Routes>
          {/* path = alamat URL-nya, element = Komponen yang mau ditampilin */}
          <Route path="/comment" element={<Comment/>} />
          <Route path="/Clock" element={<Clock/>} />
          <Route path="/imageList" element={<ImageList />} />
          <Route path="/YoutubeList" element={<YoutubeList />} />
        </Routes>
      </UserContext>
    </main>
    </>
  )
}
// pake situs babel.io 

export default App
