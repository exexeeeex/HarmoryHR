import styles from '../../styles.module.scss';

import phone from './phone.svg';
import email from './email.svg';

import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';

export const ProfileCardContacts = () => {
    const icons: any[] = [icon1, icon2, icon3];
    return (
        <div className={styles.card}>
            <div className={styles.card__block}>
                <img src={phone.src} alt='phone' />
                <p>07911 654321</p>
            </div>
            <div className={styles.card__block}>
                <img src={email.src} alt='phone' />
                <p>avd.yana@videorollnet</p>
            </div>
            <div className={styles.card__icons}>
                {icons.map((icon) => (
                    <img key={icon.src} alt={icon} src={icon.src} />
                ))}
            </div>
        </div>
    );
};
