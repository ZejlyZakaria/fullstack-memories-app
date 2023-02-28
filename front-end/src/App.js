import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login'
import Register from './components/register/Register'
import Forgotpwd from './components/forgot-pwd/ForgotPwd'
import Welcome from './components/welcome/Welcome'
import AnimeHome from './animes/AnimeHome'
import AnimeDetailsPage from "./animes/AnimeDetailsPage";
import AnimeFavorite from "./animes/AnimeFavorite";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotpwd" element={<Forgotpwd />} />
            <Route path="animes">
              <Route index element ={<AnimeHome />} />
              <Route path="details-page" element ={<AnimeDetailsPage />} />
              <Route path="favorite" element ={<AnimeFavorite />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
