export default function Pet({petType}){
    return (
        <div>
            <h2>Type: {petType.type}</h2>
            <p>Color: {petType.color}</p>
        </div>
    )
}