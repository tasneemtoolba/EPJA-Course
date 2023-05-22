import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from 'react-dom';
import "./index.css";
import App from './app';


export default () => <App/>;
const root = ReactDOM.createRoot(document.getElementById("app"));

// export const mount = (Сomponent) => {
//     root.render(
//         // <Сomponent/>,
//         // document.getElementById('app')
//         <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     );

//     if(module.hot) {
//         module.hot.accept('./app', ()=> {
//             root.render(
//                 // <App/>,
//                 // document.getElementById('app')
//                 <React.StrictMode>
//                 <App />
//               </React.StrictMode>
//             );
//         })
//     }
// };
// // getting an error
// export const unmount = () => {
//     root.unmount();
// };

export const mount = (Сomponent, element = document.getElementById('app')) => {
    const root = ReactDOM.createRoot(element);
    root.render(<Сomponent/>);
  
    if(module.hot) {
      module.hot.accept('./app', ()=> {
        root.render(<Сomponent/>);
      })
    }
  };
  
  export const unmount = () => {
      ReactDom.unmountComponentAtNode(document.getElementById('app'));
  };