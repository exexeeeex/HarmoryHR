import { ProfileInfoHeader } from '../../header';

import independence from './independence.svg';

export const ProfileInfoIndependence = () => {
    return (
        <ProfileInfoHeader>
            <div style={{ gap: '14px' }} className='flex items-center'>
                <img src={independence.src} alt='independence' />
                <div>
                    <p>Jan 27</p>
                    <p>1 dey of Sick</p>
                </div>
            </div>
        </ProfileInfoHeader>
    );
};
