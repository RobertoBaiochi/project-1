import './styles.css'

const SearchInput = ( {searchValue, handleChange} ) => {
  return (
    <input
      className='search-input'
      value={searchValue}
      onChange={handleChange} 
      type="search" 
      placeholder=''
    />
  )
}

export default SearchInput