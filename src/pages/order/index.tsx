import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Index() {
  useLoad(() => {});

  return (
    <View className="index">
      <Text>订单!</Text>
    </View>
  );
}
