import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.HeaderParent} >
            <div className={styles.heading}>
                Dashboard
            </div>
            <div className={styles.navlinks} >
                <div>About</div>
                <div>Terms & Conditions</div>
            </div>
        </div>
    )
}

export default Header