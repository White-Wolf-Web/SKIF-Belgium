import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./HOME/Home/Home ";
import reportWebVitals from "./THINGS/reportWebVitals";
import Header from "./HEADER/Header/Header";
import Footer from "./FOOTER/Footer";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Calendar from "./CALENDAR/Calendar";
import DojoList from "./DOJOS/Dojos/DojoList";
import DojoClub from "./DOJOS/Dojos/DojoClub";
import NotFound from "./404/NotFound";
import InstructorCard from "./DOJOS/DojoCard/InstructorCard";
import Test2 from "./TEST/Test2";
import MyComponent from "./TEST/MyComponent"
import Enzo from "./TEST/Enzo";
import App2 from "./TEST/App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enzo" element={<Enzo />} />
            <Route path="/c" element={<App2 />} />
            <Route path="/x" element={<MyComponent />} />
            <Route path="/testtwo" element={<Test2 />} />
            <Route path="/dojo/:id" element={<DojoClub />} />
            <Route path="/dojoslist" element={<DojoList />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/instructorCard" element={<InstructorCard />} />
            <Route path="/*" element={<NotFound />} />

        </Routes>
        <Footer />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();