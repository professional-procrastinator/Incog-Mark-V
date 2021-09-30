import React, {useState} from "react";
const Courses = require('./courses.json');

var key
var listOfCourses =[];

for([key] of Object.entries(Courses)) {
    listOfCourses.push(key)
}

function SearchBar(){
    const [query,setQuery] =useState("");

    return(

        <div id="topHead">
            <div id="headText">
                <h2 id="courseText">Courses</h2>
            </div>

            <div id="searchDiv">
                <input type="search" id="searchBar" placeholder="Search for Courses.."/>
                <button id="searchBtn"><i className="fa fa-search" id="searchIco" /></button>
            </div>
        </div>

    )

}
export default SearchBar