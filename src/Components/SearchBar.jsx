const SearchBar= ({searchParameter, setSearchParameter}) => {
    return(<div className="searchBar">
        <label>Search: </label>
        <input value={searchParameter} onChange={(event) => setSearchParameter(event.target.value)}/>
    </div>)
}
export default SearchBar;