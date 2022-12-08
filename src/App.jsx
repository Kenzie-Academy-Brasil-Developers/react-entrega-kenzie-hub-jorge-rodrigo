import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const App = () => {
  return (
    <div>
       <Routes>
         <Route path="/" element={ <LoginPage /> } />
         <Route path="/register" element={ <RegisterPage /> }/>
         <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard/:id" element={ <DashboardPage /> }/>
         </Route>
       </Routes>
    </div>
  );
}

export default App;
