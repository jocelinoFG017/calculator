import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='calculator'>
        <div className='display'>
          {/** Aqui será exibido o numero digitado */}
          <input type='text' readOnly />
        </div>

        <div className='buttons'>
        {/** Aqui será exibido os botões */}
        <button className="clear">AC</button>
        <button>ਨ</button>
        <button>%</button>
        <button>÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>

        </div>
    </div>
    </>
  );
}

export default App;
