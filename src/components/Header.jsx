import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center mb-10 p-2
       top-0 text-2xl border-b-2 border-cyan-600 text-cyan-700 font-bold"
    >
      <Link to="/">Feedback UI</Link>
    </div>
  );
};

// Header.propTypes = {
//   text: PropTypes.string,
// };

// Header.defaultProps = {
//   text: 'Feeadback UI',
// };

export default Header;
