import React from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./assets/fonts/static/Nunito-Regular.ttf"
import "./assets/fonts/static/Nunito-SemiBold.ttf"
import "./assets/fonts/static/Nunito-Black.ttf"
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import PageNotFound from './pages/PageNotFound';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Category from './pages/Category/Category';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManagePost from './pages/Admin/ManagePost/ManagePost';
import ListPost from './pages/Admin/ListPost/ListPost';
import { Toaster } from 'react-hot-toast';
import Search from './pages/Search/Search';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search/:searchText" element={<Search />} />
        </Route>
        <Route element={<AdminTemplate />}>
          <Route path="manage-post" element={<ManagePost />} />
          <Route path="/edit-post/:id" element={<ManagePost />} />
          <Route path="list-post" element={<ListPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
