import { useState, useEffect } from "react"


export default function Form(props) {

      // State to hold the data that the user inputs in the form. 
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (e) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Prevent page from refreshing on form submission
    e.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.digisearch(formData.searchterm);
  };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
                <input type='submit' value='submit'/>
            </form>
        </div>
  )
}
