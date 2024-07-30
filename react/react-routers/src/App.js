import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    
    <AuthProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={
        <React.Suspense fallback='loading.....'>
          <LazyAbout />
        </React.Suspense>} 
      />
      <Route path='contact' element={<Contact />} />
      <Route path='product' element={<Product />} >
        <Route index element={<FeaturedProduct />} />
        <Route path='featured' element={<FeaturedProduct />} />
        <Route path='new' element={<NewProduct />} />
      </Route>
      <Route path='users' element={<Users />} />
      <Route path='users/:userId' element={<UserDetail />} />
      <Route path='users/admin' element={<Admin />} />
      <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </AuthProvider>
    
  );
}

export default App;
