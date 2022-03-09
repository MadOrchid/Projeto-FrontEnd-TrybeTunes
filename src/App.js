import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/*

REFERENCIAS
https://stackoverflow.com/questions/55552147/invariant-failed-you-should-not-use-route-outside-a-router
https://github.com/SSpinelli/Trybetunes/commit/f2496a50793f47a04be61da1c5115959b3da5a0d
https://pt-br.reactjs.org/
A mentoria de sexta ajudou muito execelente aula.
*/
