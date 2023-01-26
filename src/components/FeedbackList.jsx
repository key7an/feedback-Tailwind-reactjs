import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="mt-5 ml-20 bg-lime-200 w-fit p-4 rounded-full text-orange-600">
            No Feedbacks Yet!
          </p>
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <div className="justify-center flex flex-col">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="justify-center flex flex-col">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
