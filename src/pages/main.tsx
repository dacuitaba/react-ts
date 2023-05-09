import { Tabs, Swiper, SpinLoading } from 'antd-mobile';
import { SwiperRef } from 'antd-mobile/es/components/swiper';
import { Fragment, useMemo, useRef, useState, lazy, Suspense } from 'react';
const HomePage = lazy(() => import('@/components/home'));
import classnames from 'classnames/bind';
import styles from './main.module.less';
import { HomeHeader } from '@/components/header';
const cx = classnames.bind(styles);
const TabItems = [
  {
    key: 'home',
    name: '微信',
  },
  {
    key: 'friends',
    name: '通讯录',
  },
  {
    key: 'user',
    name: '我的',
  },
];
export const Layout: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('home');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <Fragment>
      <HomeHeader headText={TabItems[activeIndex]?.name} />
      <Swiper
        className={cx('content')}
        direction='horizontal'
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveKey(TabItems[index].key);
        }}
      >
        <Swiper.Item>
          <Suspense fallback={<SpinLoading color='primary' />}>
            <HomePage />
          </Suspense>
        </Swiper.Item>
        <Swiper.Item>
          <div className={''}>西红柿</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={''}>蚂蚁</div>
        </Swiper.Item>
      </Swiper>
      <Tabs
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
          const index = TabItems.findIndex((item) => item.key === key);
          setActiveIndex(index);
          swiperRef.current?.swipeTo(index);
        }}
        className={cx('tabs')}
      >
        {TabItems.map((item) => (
          <Tabs.Tab title={item.name} key={item.key} />
        ))}
      </Tabs>
    </Fragment>
  );
};
