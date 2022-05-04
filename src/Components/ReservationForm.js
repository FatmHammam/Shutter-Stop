import styles from './ReservationForm.module.scss';


function ReservationForm() {

    return (
        <div className={styles.container}>
            <form action='' method="POST">
                <fieldset>
                    <div id="legend">
                        <legend className={styles.title}><h1>For Registeration</h1></legend>
                    </div>

                    <div class="controls">
                        <input type="text" placeholder="Name" className={styles.feilds} />
                    </div>

                    <div class="controls">
                        <input type="text" placeholder="Email" className={styles.feilds} />
                    </div>


                    <div class="controls">
                        <input type="text" placeholder="Phone" className={styles.feilds} />
                    </div>


                    <div class="controls">
                        <input type="text" placeholder="Date of event" className={styles.feilds} />
                    </div>

                    <div class="controls">
                        <input type="text" placeholder="Address" className={styles.feilds} />
                    </div>


                    <div class="controls">
                        <input type="text" placeholder="Package" className={styles.feilds} />
                    </div>

                    <textarea className={styles.textArea} placeholder="Note"></textarea>

                    <div class="controls">
                        <button class={styles.sendButton}>Send</button>
                    </div>

                </fieldset>
            </form>
        </div>
    );
}

export default ReservationForm;