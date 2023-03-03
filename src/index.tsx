import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './domains/rootStore';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
