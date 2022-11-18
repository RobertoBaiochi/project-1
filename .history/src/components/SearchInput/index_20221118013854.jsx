import React from 'react'

const SearchInput = ( {searchValue, han} ) => {
  return (
    <input
          value={searchValue}
          onChange={this.handleChange} 
          type="search" 
        />
  )
}

export default SearchInput