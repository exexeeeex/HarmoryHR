'use client';
import { authHoc } from '@/entities/auth';
import { Navigation } from '@/features/navigation';
import { identityApi } from '@/shared/api';
import { useEffect, useState } from 'react';
import { User } from '@/shared/types/auth';
import { ProfileHeader } from '@/widgets/profile';
import {
    ProfileCardContacts,
    ProfileCardDate,
    ProfileCardInfo,
    ProfileCardReports,
} from '@/widgets/profile/cards';
import styles from './styles.module.scss';
import { ProfileInfo } from '@/widgets/profile/info';

const { auth } = authHoc.default;

const Profile = () => {
    const [user, setUser] = useState<User>(Object);

    useEffect(() => {
        const profileFetch = async () => setUser(await identityApi.getUser());
        profileFetch();
    }, []);

    return (
        <main className={styles.place}>
            <Navigation avatar={user.avatar} />
            <ProfileHeader name={user.name} avatar={user.avatar} />
            <section className={styles.place__main}>
                <div className={styles.place__main__cards}>
                    <ProfileCardContacts />
                    <ProfileCardDate />
                    <ProfileCardInfo />
                    <ProfileCardReports />
                </div>
                <ProfileInfo />
            </section>
        </main>
    );
};
export default auth(Profile);
