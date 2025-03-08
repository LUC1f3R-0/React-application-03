import ph001 from "../assets/places/001.jpg";

export const Card = () => {
    return (
        <main>
            <div className="card">
                <img src={ph001} className="card-img" alt="Mount Fuji" />
                <div className="card-container">
                    <div className="card-top">
                        <span>🇯🇵 JAPAN</span>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                            View on Google Maps
                        </a>
                    </div>
                    <h1 className="card-title">Mount Fuji</h1>
                    <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="card-description">
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                        Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </main>
    );
};
