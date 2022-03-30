import '../styles/Search.css'


function Search({toto, handleon}) {
  return (
    <div className="App">
       
<form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder={toto} aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleon} type="submit">Search</button>
    </form>
  
  
  
    </div>
  );
}

export default Search;
