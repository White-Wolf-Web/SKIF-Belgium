import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../HOME/Home/Home ";
import Header from "../HEADER/Header/Header";
import Footer from "../FOOTER/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "../CALENDAR/Calendar";
import Referees from "../REFEREES/Referees";
import DojoList from "../DOJOS/Dojos/DojoList";
import DojoClub from "../DOJOS/Dojos/DojoClub";
import NotFound from "../404/NotFound";
import CalendarPoster from "../CALENDAR/CalendarPoster";
import "../i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import "./App.css";
import TermsConditions from "../PAGES/TermsConditions";
import History from "../PAGES/History";
import Karateka from "../KARATEKAS/karateka"
import Karatekas from "../KARATEKAS/Karatekas"
import KarateConcept from "../PAGES/KarateConcept";

function App() {
    const [isI18nInitialized, setIsI18nInitialized] = useState(false);
    useEffect(() => {
        i18n.on('initialized', () => {
          setIsI18nInitialized(true);
        });
      }, []);
    
      if (!isI18nInitialized) {
        return null; 
      }
    
    return (
        <I18nextProvider i18n={i18n}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
               
                <Route path="/dojo/:id" element={<DojoClub />} />
                <Route path="/dojoslist" element={<DojoList />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/referees" element={<Referees />} />
                <Route path="/history" element={<History />} />
                <Route path="/x" element={<CalendarPoster />} />
                <Route path="/karatekas/:id" element={<Karateka />} />
                <Route path="/karatekas" element={<Karatekas />} />
                <Route path="/karateconcept" element={<KarateConcept />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </I18nextProvider>
    );
}

export default App;
