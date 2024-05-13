

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/mainLayout";
import Home from "./pages/home";
import Basket from "./pages/basket";
import Add from "./pages/add";
import MainProvider from "./context/mainProvider";
import AdminPanel from "./pages/adminPanel";
import Update from "./pages/update";

function App() {


  return (
    <>
    <MainProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/add" element={<Add />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
