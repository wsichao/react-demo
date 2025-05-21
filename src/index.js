import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  // Provider可以让容器组件拿到Redux的store。也就是说，Provider在根组件外面包了一层，这样一来，App组件的所有子组件就默认都可以拿到store了。
    <Provider store={store}>
      <App />
    </Provider>
);