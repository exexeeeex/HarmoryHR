import { FC } from 'react';
import { Input } from '@/components/ui/input';
import styles from './styles.module.scss';

import search from './search.svg';

type Props = {
    placeholder: string;
    value?: string;
};

export const SearchInput: FC<Props> = ({ placeholder, value }) => (
    <div className={`${styles.search}`}>
        <img src={search.src} className='w-4' alt='search' />
        <Input placeholder='Search' className={styles.search__input} />
    </div>
);
