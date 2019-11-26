import React from "react";
import BotCard from "../components/BotCard";

const Search = props => {

    return (
        <div className="ui four column grid">
            <div className="row">
                <form style={{marginRight: "600px", marginTop: "10px"}}>
                    <input onChange={props.search} value={props.searchTerm} type="text" placeholder="Search by name..." />
                </form>
                <select style={{marginTop: "10px"}} onChange={props.filter} value={props.filterValue}>
                    <option default>Select Your Bot Class</option>
                    <option value="Assault">Assault</option>
                    <option value="Support">Support</option>
                    <option value="Defender">Defender</option>
                </select>
            </div>
        </div>
    );

};

export default Search;