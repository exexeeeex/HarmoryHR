import { Button } from '@/components/ui/button';
import { ProfileInfoHeader } from '../../header';
import { ProfileInfoTimeCard } from './card';
import styles from './styles.module.scss';

import health from './health.svg';
import document from './document.svg';
import primary from './primary.svg';
import time from './time.svg';

export const ProfileInfoTime = () => {
    return (
        <main>
            <ProfileInfoHeader>
                <div
                    style={{ gap: '5px' }}
                    className={`${styles.time} flex items-center`}
                >
                    <img src={document.src} alt='document' />
                    <p style={{ fontSize: '20px', color: '#204973' }}>
                        Time Off
                    </p>
                </div>
                <div
                    style={{ alignItems: 'flex-end' }}
                    className={`${styles.start} flex`}
                >
                    <p>Accrual Level Start Date 03/09-2020</p>
                    <Button style={{ borderRadius: '8px' }} variant='outline'>
                        Add Time Off Policy
                    </Button>
                </div>
            </ProfileInfoHeader>
            <section
                style={{ margin: '20px auto', gap: '48px' }}
                className='flex items-center justify-center'
            >
                <ProfileInfoTimeCard
                    title={'Sick'}
                    icon={health.src}
                    number={'3'}
                    subtitle={'Days Available'}
                    footer={'Sick Full-Time'}
                    additional='1 dey scheduled'
                />
                <ProfileInfoTimeCard
                    title={'Annual Leave'}
                    icon={primary.src}
                    number={'10.3'}
                    subtitle={'Days Available'}
                    footer={'Holiday Full-Time'}
                />
                <ProfileInfoTimeCard
                    title={'Comp/in Lieu Time'}
                    icon={document.src}
                    number={'0'}
                    subtitle={'Human Used(YTD)'}
                    footer={'Comp/in Lieu Time Flexible Policy'}
                />
            </section>
            <ProfileInfoHeader>
                <div style={{ gap: '5px' }} className='flex items-center'>
                    <img src={time.src} alt='document' />
                    <p style={{ fontSize: '14px', color: '#204973' }}>
                        Upcoming Time Off
                    </p>
                </div>
            </ProfileInfoHeader>
        </main>
    );
};
