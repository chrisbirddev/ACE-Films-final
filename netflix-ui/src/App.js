import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Help from "./pages/Help";
import Legal from "./pages/Legal";
import Cookies from "./pages/Cookies";
import Netflix from "./pages/Netflix";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/new" element={<Player />} />
        <Route path="/mylist" element={<UserListedMovies />} />
        <Route path="/" element={<Netflix />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/help" element={<Help />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  );
}
