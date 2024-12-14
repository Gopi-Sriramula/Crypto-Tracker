import React from 'react'
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
function SearchBar({text,setText}) {
  return (
    <div className='search-flex'>
      <SearchIcon/>
      <input type='text' placeholder='Search' value={text} onChange={(e)=>{setText(e.target.value)}}/>
    </div>
  )
}

export default SearchBar;