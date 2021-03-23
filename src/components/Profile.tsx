import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img
                src="https:/github.com/gabrielnardes.png"
                alt="Gabriel Nardes"
            />
            <div>
                <strong>Gabriel Nardes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}
