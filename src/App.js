import AdminLogin from './Component/AdminLogin';
import AdminSignup from './Component/AdminSignup';
import LandingPage from './Component/LandingPage';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserLogin from './Component/UserLogin';
import AdminHomePage from './Component/AdminHomePage';
import Errorpage from './Component/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignup from './Component/UserSignup';
import UserHomePage from './Component/UserHomePage';
import UserView from './Component/UserView';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserHomePage/>}/>
      <Route path='/landingpage' element={<LandingPage/>}/>
      <Route path='/*' element={<Errorpage/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/adminsignup' element={<AdminSignup/>}/>
      <Route path='/user' element={<UserLogin/>}/>
      <Route path='/usersignup' element={<UserSignup/>}/>
      <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
      <Route path='/userhomepage/*' element={<UserHomePage/>}/>
      </Routes>
      </BrowserRouter>
     
  
     </div>
   );
}

export default App;
