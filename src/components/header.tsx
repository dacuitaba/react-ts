import { FC, useEffect, useState } from 'react';
import styles from './common.module.less';
import classnames from 'classnames/bind';
import dayjs from 'dayjs';
const cx = classnames.bind(styles);
interface IProps {
  headText: string;
}
export const HomeHeader: FC<IProps> = (props) => {
  const [time, setTime] = useState<string>(dayjs().format('HH:mm:ss'));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className={cx('head')}>
      <span className={cx('time')} />
      <span className={cx('name')}>{props.headText}</span>
      <span className={cx('time')}>{time}</span>
    </div>
  );
};
