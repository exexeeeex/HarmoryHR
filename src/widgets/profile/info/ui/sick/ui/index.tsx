import { ProfileInfoHeader } from '../../header';

import health from './health.svg';

export const ProfileInfoSick = () => {
    return (
        <ProfileInfoHeader>
            <div style={{ gap: '14px' }} className='flex items-center'>
                <img src={health.src} alt='health' />
                <div>
                    <p>Jan 27</p>
                    <p>1 dey of Sick</p>
                </div>
            </div>
        </ProfileInfoHeader>
    );
};
