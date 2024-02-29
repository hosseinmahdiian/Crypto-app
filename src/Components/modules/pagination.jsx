import styles from "./pagination.module.css"

const Pagination = ({Page ,setPage}) => {

    const prevHandler = () => {
        if ( Page <= 1) return ;
        setPage((Page) => Page -1)
    }

    const nextHandler = () => {
        if ( Page >= 10) return ;
        setPage((Page) => Page +1)
    }

    return (
        <div className={styles.container}>
            <button style={Page <= 1 ? {opacity:"0.3"} : null} onClick={prevHandler}>prev</button>
            <p style={Page == 1 ? {backgroundColor:"#3698d6"} : {backgroundColor:"inherit"} }>1</p>
            <p style={Page == 2 ? {backgroundColor:"#3698d6"} : {backgroundColor:"inherit"} }>2</p>
            {
                Page > 2 && Page < 9 &&(<>
                    <span>...</span>
                    <p style={{backgroundColor:"#3698d6"}} >{Page}</p>
                </>)
            }
            <span>...</span>
            <p style={Page == 9 ? {backgroundColor:"#3698d6"} : {backgroundColor:"inherit"} }>9</p>
            <p style={Page == 10 ? {backgroundColor:"#3698d6"} : {backgroundColor:"inherit"} }>10</p>
            
            <button style={Page >= 10 ? {opacity:"0.3"} : null} onClick={nextHandler}>next</button>
            
        </div>
    );
}

export default Pagination;
