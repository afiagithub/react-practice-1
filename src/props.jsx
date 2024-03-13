export default function Dev(prop){
    return (
        <div className="container">
            <h2>Name: {prop.name}</h2>
            <h3>Language: {prop.lan}</h3>
            <p>Years of Experience: {prop.year}</p>
        </div>
    )
}