import React from 'react'
import styles from './Container.module.css'
import propTypes from 'prop-types'

const Container = ({ childred }) => {
    return (
        <scetion className={styles.container}>
            {children}
        </scetion>
    )
}

Container.propTypes = {
    children: propTypes.node
}

export default Container