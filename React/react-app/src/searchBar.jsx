import { useState } from "react"



const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>search imgaes</label>
                    <input 
                    type="text"
                    value={term}
                    onChange={e => setTerm(e.target.value)}  
                    />
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default SearchBar