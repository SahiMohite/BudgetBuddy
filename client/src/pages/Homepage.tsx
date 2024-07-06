import image from '../image/img2.png';

export const Homepage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to your Personal Finance Tracker</h1>
            <div className="image-container">
                <img src={image} alt="Loading" className='image'/>
            </div>
        </div>
    );
}