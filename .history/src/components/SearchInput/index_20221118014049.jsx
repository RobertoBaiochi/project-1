import './styles.css'

const SearchInput = ( {searchValue, handleChange} ) => {
  return (
    <input
          value={searchValue}
          onChange={this.handleChange} 
          type="search" 
    />
  )
}

export default SearchInput