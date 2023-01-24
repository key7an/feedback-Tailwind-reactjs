import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import feedbackData from './components/feedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

function App(deleteHandler) {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div
      className="relative
      flex  
      justify-center
      min-h-screen
      overflow-hidden
      bg-sky-300
      font-semibold
    "
    >
      <div>
        <Header />
        <FeedbackForm handleAdd={addFeedback} feedback={feedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteHandler={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
