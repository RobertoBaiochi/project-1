import './styles.css'

const SearchInput = ( {searchValue, handleChange} ) => {
  return (
    <input
      className=''
      value={searchValue}
      onChange={handleChange} 
      type="search" 
    />
  )
}

export default SearchInput