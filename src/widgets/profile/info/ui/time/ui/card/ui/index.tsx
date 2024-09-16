import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
    title: string;
    icon: string;
    number: string;
    subtitle: string;
    additional?: string;
    footer: string;
};

export const ProfileInfoTimeCard: FC<Props> = ({
    title,
    icon,
    number,
    subtitle,
    additional,
    footer,
}) => (
    <div className='flex flex-col items-center'>
        <div
            className={`${styles.card} flex flex-col items-center justify-center`}
        >
            <h3>{title}</h3>
            <div className='flex items-center' style={{ gap: '10px' }}>
                <img src={icon} />
                <h3 style={{ fontSize: '30px' }}>{number}</h3>
            </div>
            <p className='font-semibold'>{subtitle}</p>
            {additional && (
                <p className='font-semibold' style={{ color: '#7C96B1' }}>
                    {additional}
                </p>
            )}
        </div>
        <p style={{ color: '#7C96B1', marginTop: '8px' }}>{footer}</p>
    </div>
);
