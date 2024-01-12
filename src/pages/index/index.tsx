import { useState } from 'react';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import FlightIndex from '../flight';
import './index.scss';

const DEFAULT_RENDER_LIST = [
  {
    title: '机票',
    tab: 'flight',
    index: 0,
  },
  {
    title: '火车票',
    tab: 'train',
    index: 1,
  },
  {
    title: '酒店',
    tab: 'hotel',
    index: 2,
  },
  {
    title: '汽车票',
    tab: 'bus',
    index: 3,
  },
];

export default function Index() {
  useLoad(() => {});

  const [tabIndex, setTabIndex] = useState<number>(0);

  const scrollbarStyle = { width: `${100 / DEFAULT_RENDER_LIST.length}%`, transform: `translateX(${tabIndex * 100}%)` };

  return (
    <View className="index-container">
      <View className="top">
        <View className="index-tab">
          {DEFAULT_RENDER_LIST.map(item => {
            return (
              <View
                className={`index_tab_item ${item.tab} ${tabIndex === item.index ? 'current' : ''}`}
                onClick={() => {
                  setTabIndex(item.index);
                }}
                key={item.tab}>
                {item.title}
              </View>
            );
          })}
        </View>
        <View className="scrollbar-wrap">
          <View className="scrollbar" style={scrollbarStyle} />
        </View>
      </View>

      <View className="content">
        {tabIndex === 0 ? <FlightIndex /> : '暂无'}
      </View>
    </View>
  );
}
