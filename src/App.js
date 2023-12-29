import Header from "./components/Header";
import Card from "./components/Card";
import Todo from "./components/Todo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react"


function App() {
  const [users, setusers] = useState([{
      uname: 'Pal',
      pwd: 123
  }])

  return (
      <div>
          <BrowserRouter >
              <Routes>
                  <Route path="/login" element={<Login users={users} setusers={setusers}/>} />
                  <Route path="/signup" element={<Signup users={users} setusers={setusers} />} />
                  <Route path="/landing" element={<Landing />} />

              </Routes>

          </BrowserRouter>

      </div>
  )
}

export default App;
