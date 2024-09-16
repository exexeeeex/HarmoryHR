import { FC } from 'react';
import { ProfileHeaderSelect } from './select';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ProfileLinks } from '@/shared/config';
import { ProfileCardContacts } from '../../cards/contacts/ui';

type Props = {
    name: string;
    avatar: string;
};

export const ProfileHeader: FC<Props> = ({ name, avatar }) => (
    <header className={styles.header}>
        <main className={styles.header__main}>
            <img
                className={styles.header__main__avatar}
                src={avatar}
                alt='avatar'
            />
            <div className={styles.header__main__info}>
                <div>
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                </div>
                <nav className={styles.header__main__info__nav}>
                    {ProfileLinks.map((link) => (
                        <Link
                            className={styles.header__main__info__nav__link}
                            href={link.href}
                            key={link.id}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </main>
    </header>
);
