// import { Routes, Route, Link } from "react-router-dom"


import Company from "./basic/company"
import ItemName from "./basic/item"
import Customer from "./basic/customer"
import Employee from "./basic/employee"
import City from "./basic/city"
import { Link, Route, Routes } from "react-router-dom"
import MyHookOne from "./basic/MyHookOne"
import PracticeOne from "./basic/practice20"
import AllApi from "./basic/Allapi"


function App() {
  return (
    <div>

      <nav>
        <Link to="/Company" className="toplink"> company </Link>
        <Link to="/ItemName" className="toplink"> Item List </Link>
        <Link to="/Customer" className="toplink"> Customer List </Link>
        <Link to="/Employee" className="toplink"> Employee </Link>
        <Link to="/City" className="toplink"> City </Link>
        <Link to="/practice-1" className="toplink"> Practice-1 </Link>
        <Link to="/practice-2" className="toplink"> Practice-2 </Link>
        <Link to="/Allapi" className="toplink"> All Api</Link>

      </nav>

      {/* <Routes>
        <Route path="/Company" element={<Company />} />
        <Route path="/ItemName" element={<ItemName />} />
        <Route  path="/Customer" element={<Customer />} />
        <Route  path="/Employee" element={<Employee />} />
        <Route  path="/City" element={<City />} />
      </Routes> */}

      <Routes>
        <Route exact path="/Company" element={<Company />} />
        <Route exact path="/ItemName" element={<ItemName />} />
        <Route exact path="/Customer" element={<Customer />} />
        <Route exact path="/Employee" element={< Employee />} />
        <Route exact path="/City" element={<City />} />
        <Route exact path="/practice-1" element={<MyHookOne />} />
        <Route exact path="/practice-2" element={<PracticeOne />} />
        <Route exact path="/Allapi" element={<AllApi />} />

      </Routes>

    </div>

  )
}
export default App;
