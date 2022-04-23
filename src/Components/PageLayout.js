import styles from './PageLayout.module.scss';

function PageLayout({ sideArrow, header, buttonText, body, background, footer, buttonStyle, onButtonClick }) {
  return (
    <div
      className={styles.pageLayout}
      style={{
        backgroundImage: `linear-gradient(rgba(2, 0, 0, 0.50),
      rgba(2, 0, 0, 0.50)), url(${background})`
      }}>
      <div className={styles.title}>
        <h1>
          <span className={styles.firstLetter}>Sh</span>
          utter
          <span className={styles.seconedLetter}>S</span>
          top
        </h1>
        <p>It's not just a photobooth</p>
      </div>

      <div className={styles.info}>
        <div>
          <span className={styles.sideArrow}>
            <span>{sideArrow}</span>
            <span className={styles.formTitle}>{header}</span></span>
          <div className="pt-3 pb-3">
            <form>
              {body}
              <div>
                <button type='button' className={styles.signUpButton}
                  style={{ marginTop: `${buttonStyle}` }} onClick={onButtonClick}>
                  {buttonText}</button>
              </div>
              {footer}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;