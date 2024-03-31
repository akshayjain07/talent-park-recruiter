// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import { ContextProvider } from './contexts/ContextProvider';
// import DashBoard from './page';

// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <DashBoard />
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );


import { ReactNode } from 'react';
import { ContextProvider } from './contexts/ContextProvider';
import DashBoard from './page';

// import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <ContextProvider>
       <DashBoard />
     </ContextProvider>
    </main>
  );
};

export default RootLayout;