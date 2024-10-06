//import styles from './Button.module.css'

function Button(){

    // Inline CSS Styles
    
    const styles ={
            backgroundColor: "aqua",
            color: "azure",
            padding:  "10px 20px",
            borderradius: "5px",
            border: "none",
            cursor: "pointer",
    }

    return(

        <button style={styles}>
            Click me
        </button>

    );

    // Module CSS Styles

    // return(

    //     <button className={styles.button}>
    //         Click me
    //     </button>

    // );
}

export default Button