import { Children } from "react";
import Nav from './Nav.js'
import styles from "../styles/Layout.module.css";

const Layout = ({children}) => {
    return (
        <>
          
            <div  className={styles.container}>
                <div style={{width:"100px"}}> 
                    <Nav/>
                </div>
                <main className={styles.main}>
                    {children}
                </main>
        
            </div>
        </>
    )
}

export default Layout