import React, { useContext, useState, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  const { updateFeedback, addFeedback, feedbackEdit } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // this code below have problem :

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  // code above ^

  const handleTextChange = (e) => {
    setText(e.target.value);

    if (text === '') {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 chars');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-lime-200 p-12 mb-5 shadow-md shadow-black rounded-lg"
    >
      <h2 className="text-purple-500 -translate-y-3 font-bold mb-3">
        How would you rate our project?
      </h2>
      <RatingSelect select={(rating) => setRating(rating)} />
      <div className="absolute justify-between">
        <input
          type="text"
          onChange={handleTextChange}
          value={text}
          placeholder="Write a review"
          className="-translate-x-8 shadow-sm w-56 shadow-black outline-none text-xs
           font-thin mb-0 p-1 rounded-lg mr-0 bg-lime-100"
        />
        {btnDisabled}
        <button
          type="submit"
          disabled={btnDisabled}
          className="translate-x-0 bg-sky-300 p-1 pl-3 pr-3 rounded-lg mt-2 outline-1
          shadow-black shadow-sm text-cyan-900 text-xs"
        >
          Send
        </button>
      </div>
      {message && (
        <div
          className="translate-y-9 flex translate-x-8 p-2 shadow-sm shadow-black w-fit
         font-medium text-gray-500 text-xs"
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default FeedbackForm;
