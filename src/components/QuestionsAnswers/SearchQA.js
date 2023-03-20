import React from 'react';
import {MdSearch} from 'react-icons/md';
import './QASearch.css';

// filter through the questions and answers section
// remember placeholder text, container for input and align left
const SearchQA = () => {

  let inputCSS = 'searchBox search-field input input-bordered w-full rounded-none h-16 mr-3 py-3 input-primary';

  return (

    <div className=' input-container'>
      <MdSearch className='searchIcon' />
      <input className={inputCSS} placeholder='Have a question? Search for answers...' />
    </div>

  );
};

export default SearchQA;