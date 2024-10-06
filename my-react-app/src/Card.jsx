import profilePic from './assets/react.svg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile pic"></img>
            <h2 className="card-title" >Agum Medisa</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, reprehenderit.</p>
        </div>
    );

}

export default Card