import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";



const App = () => {
  return (
    <div>
       <Routes>
         <Route path="/" element={ <LoginPage /> } />
         <Route path="/register" element={ <p>teste 2</p> }/>
         <Route path="/dashboard/:id" element={ <p>teste 3</p> }/>
       </Routes>
    </div>
  );
}

export default App;
