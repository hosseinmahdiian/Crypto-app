import styles from "./layout.module.css";

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Crypto App</h1>
            </header> 
            
            {children}

            <footer className={styles.footer}>
                <p>Create app by  Hoosein M.Z </p>
            </footer>

        </>
    )
}

export default Layout;
