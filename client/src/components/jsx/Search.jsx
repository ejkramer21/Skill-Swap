import React,{useState} from "react";
import "../css/Search.css"

function Search() {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        // if(e.keyCode===13){
        //     console.log("enter received")
        // } else {
            setSearch(e.target.value);
            console.log(search)
        // }
        
    }

    const handleKeyPress = (e) => {
        if(e.key==='Enter'){
            console.log("enter recv");
        }
        
    }
    return (
        <>
        <div >
            <input
                class="container"
                id="search-bar"
                value={search}
                placeholder="Plumbing"
                onChange={handleSearch}
                onKeyDown={handleKeyPress}
            ></input>
            <ul id="samples">
            <li>Bethia Juarez</li>
            <br></br>
            <li>Leslie Franklin</li>
            <br></br>
            <li>Benjamin Clark</li>
            <br></br>
            <li>Rocio Noumavich</li>
            </ul>
        </div>
        </>
    );
}

export default Search;