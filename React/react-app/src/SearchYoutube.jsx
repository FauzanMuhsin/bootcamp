import { useState } from "react";
const SearchVideo = ({onSubmit}) => {
    const [keyword, setTerm] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(keyword)
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>search video</label>
                    <input 
                    type="text"
                    value={keyword}
                    onChange={e => setTerm(e.target.value)}  
                    />
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default SearchVideo