import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";



const App = () => {
  return (
    <div>
       <Routes>
         <Route path="/" element={ <LoginPage /> } />
         <Route path="/register" element={ <RegisterPage /> }/>
         <Route path="/dashboard/:id" element={ <p>teste 3</p> }/>
       </Routes>
    </div>
  );
}

export default App;
