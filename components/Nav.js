import Link from "next/link";
import { useRouter } from 'next/router'
import Head from "next/head"
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar'


import navStyles from '../styles/Nav.module.css'
import navMenus from '../configs/navMenu.js'

function Nav() {

    const router = useRouter();
    const src='../configs/yeslog.png'

    return (
        <>
                <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
<nav className={navStyles.nav}>

            <ul>
                <li>
                {/* <Avatar alt="Remy Sharp" src={src} /> */}
                </li>
                {navMenus.map(menu=>(
                    <li key={menu.id} className={router.pathname == menu.path ? navStyles.active : ""}>
                        

                        {/* <FontAwesomeIcon icon={faHome} /> */}
                        <Link className={navStyles.link} href={menu.path}><a><Icon className={navStyles.icon}>{menu.icon}</Icon><span className={navStyles.label}>{menu.label}</span></a></Link>
                    </li>


                ))}
            </ul>
        </nav>

        </>

        
      
    )
}

export default Nav
