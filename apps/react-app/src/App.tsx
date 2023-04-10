import './App.css';
import { useData } from 'chanoo-react-query';
import { testApi } from './api/testApi';

function App() {
  const { data } = useData(['testApi', undefined], testApi);

  return (
    <div>
      {(data as any)?.map((el: any) => (
        <p key={el.id}>{el?.title}</p>
      ))}
    </div>
  );
}

export default App;
