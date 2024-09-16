import styles from '../../styles.module.scss';

import country from './country.svg';
import location from './location.svg';
import number from './number.svg';
import operations from './operations.svg';
import time from './time.svg';

export const ProfileCardInfo = () => (
    <div className={styles.card}>
        <div className={styles.card__block}>
            <img src={number.src} alt='number' />
            <p>5</p>
        </div>
        <div className={styles.card__block}>
            <img src={time.src} alt='time' />
            <p>Full-Time</p>
        </div>
        <div className={styles.card__block}>
            <img src={operations.src} alt='operations' />
            <p>Operations</p>
        </div>
        <div className={styles.card__block}>
            <img src={country.src} alt='country' />
            <p>Europe</p>
        </div>
        <div className={styles.card__block}>
            <img src={location.src} alt='location' />
            <p>London, UK</p>
        </div>
    </div>
);
