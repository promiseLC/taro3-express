import { View, Swiper } from '@tarojs/components';
import { useEffect, useState } from 'react';
import './index.scss';

interface IProps {
  tabList: { label: string; id: number }[];
  initTab?: number;
  children: any;
  onChange?: (e: number) => void;
  tabClick?: (e: number) => void;
  className?:string;
}

const Tab = ({ tabList, initTab, children, onChange,tabClick,className }: IProps) => {
  const [currentId, setCurrentId] = useState(tabList?.[0]?.id||0);

  useEffect(
    () => {
      if (initTab) {
        setCurrentId(initTab);
      }
    },
    [initTab]
  );

 

  const handleClick = id => {
    setCurrentId(id);
    tabClick && tabClick(id);
  };

  const handleChange = id => {
    setCurrentId(id);
      onChange && onChange(currentId);
  };

  const scrollbarStyle = {
    width: `${100 / tabList.length}%`,
    transform: `translateX(${currentId * 100}%)`,
  };

  return (
    <View className={`tab-container ${className}`}>
      <View className="tab-bar">
        {tabList.map(item => {
          return (
            <View
              key={item.id}
              className={`tab-item ${currentId === item.id ? 'active' : ''}`}
              onClick={() => {
                handleClick(item.id);
              }}>
              {item.label}
            </View>
          );
        })}
        <View className="scroll-bar" style={scrollbarStyle} />
      </View>

        <Swiper
          className="tab-content"
          current={currentId}
          onChange={e => {
            handleChange(e.detail.current);
          }}>
          {children}
        </Swiper>

    </View>
  );
};

export default Tab;
