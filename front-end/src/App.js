import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login'
import Register from './components/register/Register'
import Welcome from './components/welcome/Welcome'
import AnimeHome from './animes/AnimeHome'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="animes">
              <Route index element ={<AnimeHome />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
