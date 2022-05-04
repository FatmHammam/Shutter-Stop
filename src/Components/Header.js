import styles from './Header.module.scss';

function Header({ leftSpanwidth, rightSpanWidth, title, bgColor, color }) {

    return (
        <header>
            <span className={styles.leftBorder} style={{ width: `${leftSpanwidth}` , backgroundColor: `${bgColor}`, color: `${color}`}} ></span>
            <p style={{color: `${color}`}}>{title}</p>
            <span className={styles.rightBorder} style={{ width: `${rightSpanWidth}`, backgroundColor: `${bgColor}` }}
            ></span>
        </header>
    );
}

export default Header;