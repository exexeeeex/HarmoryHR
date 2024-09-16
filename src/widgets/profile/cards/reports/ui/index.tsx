import styles from '../../styles.module.scss';

import profile from './profile.svg';
import operations from './operations.svg';

export const ProfileCardReports = () => (
    <div className={styles.card}>
        <div className={styles.card__block}>
            <img src={profile.src} alt='profile' />
            <p>Shane</p>
        </div>
        <div className={styles.card__block}>
            <img src={profile.src} alt='profile' />
            <p>Mitchell</p>
        </div>
        <div className={styles.card__block}>
            <img src={profile.src} alt='profile' />
            <p>Nathan</p>
        </div>
        <div className={styles.card__block}>
            <img src={profile.src} alt='profile' />
            <p>Philip</p>
        </div>
        <div className={styles.card__block}>
            <img src={operations.src} alt='operations' />
            <p>And 3 more..</p>
        </div>
    </div>
);
