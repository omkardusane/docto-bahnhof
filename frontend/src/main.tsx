import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary'
import RootLayout from './layouts/RootLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    {/* <RootLayout > */}
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
    {/* </RootLayout> */}
  </ErrorBoundary>
)
