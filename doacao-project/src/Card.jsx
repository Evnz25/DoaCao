import profilePic from './assets/profilePic.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Cachorro</h2>
            <p className="card-text">Au au au</p>
        </div>
    )
}

export default Card