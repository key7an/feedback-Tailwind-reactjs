import React from 'react';
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ item, deleteHandler }) => {
  const deleteHandle = () => {
    deleteHandler(item.id);
  };

  return (
    <div>
      <div
        className="relative flex justify-center -translate-x-2 translate-y-4 w-6
         h-6 bg-sky-400 text-purple-600 rounded-full outline-purple-600 outline-dotted"
      >
        {item.rating}
      </div>
      <button onClick={deleteHandle} className="absolute translate-x-80">
        <FaTimes className="text-purple-500 text-xs translate-x-2 -translate-y-0" />
      </button>
      <div
        className="bg-lime-100 shadow-sm shadow-black text-sky-600 pr-14
      p-5 rounded-lg font-semibold text-sm"
      >
        {item.text}
      </div>
    </div>
  );
};

export default FeedbackItem;
