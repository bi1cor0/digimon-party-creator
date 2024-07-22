export default function DigiDisplay({ digimon }) {
     const loaded = () => {
        //setting up ? variables to check if the necessary data exists before trying to access it. 
        const level = digimon?.levels?.[0]?.level || 'Unknown';
        const attribute = digimon?.attributes?.[0]?.attribute || 'Unknown';
        const description = digimon?.descriptions?.[1]?.description || 'No description available';

        return (
        <>
            <h2>{digimon.name}</h2>
            <img src={digimon.images[0].href} alt={digimon.name} />
            <ul>
                <li>Level: {level}</li>
                <li>Attribute: {attribute}</li>
                <li>Description: {description}</li>
            </ul>
        </>
        );
        };

        const loading = () => {
            return <h3>No Digimon to Show</h3>
        }
        return digimon ? loaded() : loading();
  }