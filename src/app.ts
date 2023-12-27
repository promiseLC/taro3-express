import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import './app.scss';

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    // eslint-disable-next-line no-console
    console.log('App launched.1');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
