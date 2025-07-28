import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route , NavLink} from 'react-router';
import { Discovery } from './features/discovery/pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    
      <BrowserRouter>
          <nav>
         <NavLink to="/" end>
        Home
      </NavLink>
      |
      <NavLink to="/discovery" end>
        Discover
      </NavLink>
      </nav>
        ̥<Routes>
          <Route path="/" element={<App />} />
          <Route path="/discovery" element={<Discovery />} />
        </Routes>
      </BrowserRouter>,
    </Provider>
  </StrictMode>,
)
