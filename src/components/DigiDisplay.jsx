export default function DigiDisplay({ digimon }) {
     const loaded = () => {
        return (
        <>
            <h1>{digimon.name}</h1>
            <img src={digimon.images[0].href} alt={digimon.name} />
        </>
        );
        };

        const loading = () => {
            return <h3>No Digimon to Show</h3>
        }
        return digimon ? loaded() : loading();
  }