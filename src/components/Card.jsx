
export const Card = ({ img: { src, alt }, country, title, date: { onDate, closeDate }, details }) => {
    return (
        <main>
            <div className="card">
                <img src={src} className="card-img" alt={alt} />
                <div className="card-container">
                    <div className="card-top">
                        <span>{country}</span>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                            View on Google Maps
                        </a>
                    </div>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-date">{onDate} - {closeDate}</p>
                    <p className="card-description">
                        {details}
                    </p>
                </div>
            </div>
        </main>
    );
};