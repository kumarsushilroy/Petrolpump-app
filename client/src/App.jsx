import { BrowserRouter, Routes, Route } from "react-router-dom";

import Table from "./Components/Table";
import Login from "./Components/Login";
import AddReport from "./Components/AddReport";
import PrivateRoute from "../Routes/PrivateRoute";
import AdminRoute from "../Routes/AdminRoute";
import Navbar from "./Components/Navbar";
import Admindashboard from "./Components/Admindashboard";
import UserDashboard from "./Components/UserDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path='/add/report' element={<AddReport/>} /> */}
          // admin Route
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path='admin' element={<Admindashboard/>} />
            <Route path="add/report" element={<AddReport />} />
          </Route>
          // Private ROute
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<UserDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
