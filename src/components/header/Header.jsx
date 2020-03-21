import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} >
                <NavLink className={styles.link} activeClassName={styles.active} to="/">Hello!, i'm the Header</NavLink>
                <NavLink className={styles.link} activeClassName={styles.active} to="/sample-page">To sample page</NavLink>
            </nav>
        </header>
    )
}

export default Header
