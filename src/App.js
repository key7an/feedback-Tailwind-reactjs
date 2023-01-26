import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { FaQuestion } from 'react-icons/fa';

import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <div
        className="relative flex justify-center min-h-screen max-w-1600
        overflow-hidden bg-sky-300 font-semibold"
      >
        <div>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    <Header />
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />

              <Route
                className="relative flex justify-center min-h-screen
                max-w-1600 overflow-hidden bg-sky-300 font-semibold"
                path="/about"
                element={
                  <div>
                    <Header />
                    <About />
                  </div>
                }
              />
            </Routes>
            {/* <Link to={'/'}>
            <FaQuestion className="relative items-center text-purple-500
             translate-x-44 translate-y-36" />
          </Link> */}
          </BrowserRouter>
        </div>
      </div>
    </FeedbackProvider>
  );
}

export default App;
