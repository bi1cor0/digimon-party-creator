# The Advanced Digimon Search Application
Originally this application was supposed to be a Digimon look up and party creator. Where users were able supposed to originally search for Digimon and add them to a 'party'. Or an adventuring team, in reference to the old anime TV show. I wanted it to showcase what a particular team set up would look like, with evolution lines. But I've been struggling with React recently, and it proved to be more troublesome than it was. 

## What it is now
I've scaled back this project to only include a search function going through the Digimon API and a useEffect hook to generate a state where a random Digimon is selected. Now it is a guide and sort of a Pokedex but for Digimon for people that are new to the concept of Digimon. I also included an error page for when users go above the parameters of the search function. 

## Challenges
I'm not really well versed with React and all of the learned hooks since it honestly can get confusing with all the props and states that are interacting with each other. So I had to scale back my useEffect function to only generate a random Digimon with a random number generator that I used from Stack Overflow. Here are the features I wanted to include, but could not due to time:
1. A separate page that would detail all of the relevant and necessary data for the Digimon that was searched for. 
2. An array of Digimon being rendered on start up to give a sort of examples for Digimon names.
3. Links attached for each Digimon name being brought up after an initial Digimon was searched for. For example: If users were to search a Child/Rookie level Digimon, I would would've put links to their Evolution lines. 

## Sources:
DAPI: https://digi-api.com/
Random Number Function: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript