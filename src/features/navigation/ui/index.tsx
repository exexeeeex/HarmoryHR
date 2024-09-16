import { NavLinks } from '@/shared/config';
import { SearchInput } from '@/shared/ui/inputs/search';
import styles from './styles.module.scss';
import Link from 'next/link';

import settings from './settings.svg';
import faq from './faq.svg';
import notification from './notification.svg';
import list from './list.svg';
import logout from './logout.svg';
import { authService } from '@/entities/auth';

export const Navigation = (props: { avatar: string }) => {
    return (
        <header
            className={`${styles.header} mx-auto container flex items-center `}
        >
            <div className='logo font-semibold text-2xl'>
                <h1>HarmonyHR</h1>
            </div>
            <nav className={`${styles.header__nav}`}>
                {NavLinks.map((link) => (
                    <Link
                        className={`${styles.header__nav__link}`}
                        key={link.id}
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <SearchInput placeholder={'Search'} />
            <nav className={`${styles.header__userbar} flex items-center`}>
                <img src={settings.src} alt='settings' />
                <img src={faq.src} alt='faq' />
                <img src={notification.src} alt='notification' />
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img
                    className={styles.header__navmenu}
                    src={list.src}
                    alt='list'
                />
                <img
                    src={props.avatar}
                    alt='avatar'
                    className={styles.header__userbar__avatar}
                />
                <img
                    onClick={() => authService.logout()}
                    style={{ width: '35px', cursor: 'pointer' }}
                    src={logout.src}
                    alt='logout'
                />
            </div>
        </header>
    );
};
