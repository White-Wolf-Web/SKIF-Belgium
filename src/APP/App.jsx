import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../HOME/Home/Home ";
import Header from "../HEADER/Header/Header";
import Footer from "../FOOTER/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "../CALENDAR/Calendar";
import DojoList from "../DOJOS/Dojos/DojoList";
import DojoClub from "../DOJOS/Dojos/DojoClub";
import NotFound from "../404/NotFound";
//import BEN from "../CALENDAR/BEN";
import "../i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import "./App.css";
import TermsConditions from "../PAGES/TermsConditions";
import History from "../PAGES/History";


function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
               
                <Route path="/dojo/:id" element={<DojoClub />} />
                <Route path="/dojoslist" element={<DojoList />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/history" element={<History />} />
               


                
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </I18nextProvider>
    );
}

export default App;
