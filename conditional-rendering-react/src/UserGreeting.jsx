import PropTypes from 'prop-types';

function UserGreeting(props){

    // Jika kondisi pada App.jsx bernilai "true" maka dia akan return props.username

    // if(props.isLoggedIn){
    //     return <h2 className="welcome-message" > Welcome {props.username} </h2>
    // }

    // // Jika kondisi pada App.jsx bernilai "false" maka dia akan return "Please Log In to Continue"
    // // Sebenarnya kita bisa menghilangkan else{} statement dan itu hasilnya akan sama

    // else{
    //     return <h2 className="login-prompt"> Please Log In to Continue</h2>
    // }

    // Atau kita juga bisa menggunakan basis kode berikut

    // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2> Please log in to Continue</h2>);

    // Kita juga bisa menggunakan baris kode berikut

    const welcomeMessage = <h2 className="welcome-message" > Welcome {props.username} </h2>

    const loginPrompt = <h2 className="login-prompt"> Please Log In to Continue</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt );
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest",
}

export default UserGreeting