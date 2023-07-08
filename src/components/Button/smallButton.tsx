import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'
const smallButton = ({text, url}) => {
    return (
    <Link href={url} passHref>
    <button className={styles.buttonSmall}>
        {text}
    </button>
    </Link>
    )
}

export default smallButton