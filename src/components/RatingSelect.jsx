import React, { useContext, useState, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState();
  const { feedbackEdit } = useContext(FeedbackContext);

  // have problem !
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  // the code above , doesn't work

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="-translate-y-2 grid grid-cols-10 gap-x-1.5">
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label
          htmlFor="num1"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 hover:text-sky-100 focus:outline-none peer-checked:ring-purple-300 
           peer-checked:ring-2 peer-checked:border-transparent peer-checked:text-lime-200 cursor-pointer
           peer-checked:bg-sky-300"
        >
          1
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label
          htmlFor="num2"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          2
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label
          htmlFor="num3"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          3
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label
          htmlFor="num4"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          4
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label
          htmlFor="num5"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          5
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num6"
          name="rating"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label
          htmlFor="num6"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          6
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label
          htmlFor="num7"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          7
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num8"
          name="rating"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label
          htmlFor="num8"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          8
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num9"
          name="rating"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label
          htmlFor="num9"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          9
        </label>
      </li>
      <li>
        <input
          className=" sr-only peer"
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label
          htmlFor="num10"
          className="flex justify-center text-purple-600 bg-lime-200 border border-purple-200 rounded-full
            hover:bg-sky-300 focus:outline-none peer-checked:ring-purple-200  peer-checked:bg-sky-300
           peer-checked:ring-1 peer-checked:border-transparent cursor-pointer  hover:text-sky-100 peer-checked:text-lime-200"
        >
          10
        </label>
      </li>
    </ul>
  );
};

export default RatingSelect;
