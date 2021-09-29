const IssInfoBox = ({ info }) => {
    return (
        <>
        { info &&
        <div className="Iss-info">
            <h2>Astronauts currently in space</h2>
            <ul>
                {info && info.map((astro, id) => 
                    <li key={id}><strong>{astro.name}</strong></li>
                )}
            </ul>
        </div>
        }
        </>
    )
}

export default IssInfoBox