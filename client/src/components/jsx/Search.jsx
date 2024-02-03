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
        <div class="container">
            <input
                value={search}
                placeholder="Desired Skill...."
                onChange={handleSearch}
                onKeyDown={handleKeyPress}
            ></input>
        </div>
    );
}

export default Search;