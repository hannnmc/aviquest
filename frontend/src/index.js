import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
// import configureStore from "./store";

function Root() {
  const store = configureStore();

  return (
    <ModalProvider>
        {/* <Provider store={store}> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </Provider> */}
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
