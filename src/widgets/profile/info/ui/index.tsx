import { ProfileInfoTime } from './time';
import { ProfileInfoSick } from './sick';
import { ProfileInfoIndependence } from './independence';
import { ProfileInfoHistory } from './history';
import styles from './styles.module.scss';

export const ProfileInfo = () => {
    return (
        <main className={styles.info}>
            <ProfileInfoTime />
            <ProfileInfoSick />
            <ProfileInfoIndependence />
            <ProfileInfoHistory />
        </main>
    );
};
