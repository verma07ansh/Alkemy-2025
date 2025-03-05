import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SchedulePage from './pages/SchedulePage';
import PastEventsPage from './pages/PastEventsPage';
import AboutPage from './pages/AboutPage';
import StudentCouncilPage from './pages/StudentCouncilPage';
import Footer from './components/footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-medieval">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/past-events" element={<PastEventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/student-council" element={<StudentCouncilPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;