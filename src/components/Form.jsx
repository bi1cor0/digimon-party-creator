import { useState, useEffect } from "react"


export default function Form(props) {

      // State to hold the data that the user inputs in the form. 
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when user will type into form
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
        <>
        <h1>Welcome to the Digimon Search and Info Application!</h1>
        <h3>Wondering what Digimon are? Here's a handy link: 
        <a href="https://wikimon.net/Digimon_(species)" target="_blank"> Wikimon: The Digimon Wiki</a>
        </h3>
        <h4>This application uses the Digimon API or DAPI and serves as an introduction into what the Digimon are.</h4>
        <h4>Please go ahead and search for any Digimon you are curious about. Or if you don't know any Digimon, go ahead and enter in a number from 1 to 1460!</h4>

        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
                <input type='submit' value='Search'/>
            </form>
        </div>
        </>
  )
}
