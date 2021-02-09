import HelloFunctional from './HelloFunctional';
import HelloFunctionalWithCreateElement from './HelloFunctionalWithCreateElement';
import HelloComponent from './HelloComponent';
import HelloPureComponent from './HelloPureComponent';

function App() {
  return (
    <div>
      <HelloFunctional />
      <HelloFunctionalWithCreateElement />
      <HelloComponent />
      <HelloPureComponent />
    </div>
  );
}

export default App;
