import { useState } from "react"

const Form2 = () => {
    const [form, setForm] = useState({
        first: "",
        last: "",
    })

    const handleChange =(event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        })
        console.log(form.first)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("submit : " + form.first +" "+ form.last)
    }

    return (
        <form onSubmit={handleSubmit}>
                <label>
                    Name : <br />
                    <input
                        type="text"
                        name="first"
                        value={form.first}
                        onChange={handleChange} 
                     />
                </label><br /><br />
                <label>
                    Name : <br />
                    <input
                        type="text"
                        name="last"
                        value={form.last}
                        onChange={handleChange} 
                     />
                </label>
                <input type="submit" value="submit"/>
            </form>
    )

}

export default Form2