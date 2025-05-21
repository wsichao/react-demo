import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import store from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// 监测redux中的状态变化，重新渲染页面
// store.subscribe(() => {
    root.render(<App />);
// })