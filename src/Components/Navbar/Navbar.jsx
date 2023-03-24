import React from 'react'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img className={styles.navIcon} src={newsIcon} alt="navbar icon"/>
                <h1 className={styles.navTitle}>NEWS</h1>
            </div>
        </nav>
    )
}

export default Navbar