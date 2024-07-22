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
            return <h1>No Digimon to Show</h1>
        }
        return digimon ? loaded() : loading();
  }