import React, { FC } from 'react';
import styles from './styles.module.scss';

export const ProfileInfoHeader: FC<React.PropsWithChildren> = ({
    children,
}) => (
    <header className={`${styles.header} w-full flex items-center`}>
        {children}
    </header>
);
