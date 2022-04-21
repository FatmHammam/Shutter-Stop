import styles from './PageLayout.module.scss';

function PageLayout({ header, buttonText, body, background }) {
  return (
    <div
      className={styles.pageLayout}
      style={{ backgroundImage: `linear-gradient(rgba(2, 0, 0, 0.50),
      rgba(2, 0, 0, 0.50)), url(${background})`}}>
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
          <p className={styles.formTitle}>{header}</p>
          <div className="pt-3 pb-3">
            <form>
              {body}
              <div>
                <button className={styles.signUpButton}>{buttonText}</button>
              </div>

              <div className="text-center fs-6 pt-3">
                <span href="#">You have an account?</span>
                <a href="#" className={styles.loginLink}>Log in</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;