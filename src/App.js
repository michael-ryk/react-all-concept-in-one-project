import './App.css';
import UserModule from './components/UI/UserModule'
import FetchApi from './components/UI/FetchApi';
import TypeScript from './components/TypeScript';

function App() {
  return (
    <div className="App">
      <TypeScript />
      <UserModule />
      <FetchApi />
    </div>
  );
}

export default App;
