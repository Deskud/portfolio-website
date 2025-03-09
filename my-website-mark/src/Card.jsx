import profilePic from './assets/mediic.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic}></img>
            <h1 className='card-name'>Medicussy</h1>
            <p className='card-description'>Oops! That was not medicine.</p>
            <button className='card-button'>Hire</button>
        </div>

    );
}

export default Card