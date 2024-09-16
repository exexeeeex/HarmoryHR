import { Input } from '@/components/ui/input';
import styles from './styles.module.scss';

import close from './close.svg';
import arrow from './arrow.svg';

export const SelectInput = (props: {
    placeholder?: string;
    value?: string;
    width: number;
}) => {
    return (
        <div
            style={{ maxWidth: `${props.width}px`, width: `100%` }}
            className={styles.block}
        >
            <Input
                className={styles.block__input}
                type='text'
                value={props.value && props.value}
                placeholder={props.placeholder && props.placeholder}
            />
            <img alt='close' style={{ cursor: 'pointer' }} src={close.src} />
            <div className={styles.block__drop}>
                <img src={arrow.src} alt='arrow' />
            </div>
        </div>
    );
};
