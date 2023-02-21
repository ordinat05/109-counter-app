import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState();

  const decrease = () => {
    if (count > 0) {
      // Sıfırdan Küçük değerlerle işlem yapmak istemiyorsan count > 0 bunu yazdık.
      setCount(count - 1)
    }
  }
  const increase = () => {
    setCount(count + 1)
  }

  // function onChange(e) {
  //   setWarning(e);
  //   alert("Girdiğiniz Sayı yakalandı");
  // }

  useEffect(() => {
    console.log("This Number is warning", warning, typeof warning);
    console.log("This Number is count", count, typeof count);
    if (count === warning) {
      alert("Belirtilen değer yakalandı !");
      console.log("Yakalandı");
    }
    // if (count === warning) {
    //   console.log(warning);
    //   alert("Girdiğiniz Sayı yakalandı");
    // } else (count === 3); {
    //   console.log("This Number is warning", warning);
    //   console.log("This Number is count", count);
    // }
  }, [count, warning]);

  // let sonucDurumu = (event) => {
  //   event.preventDefault();

  //   if (count === warning) {
  //     alert("Girdiğiniz Sayı yakalandı");
  //   }
  // };


  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      <h1>Number Catcher - Sayı Yakalayıcı</h1>
      <h1>Number Detector - Numara Dedektörü</h1>


      <div className='container'>
        <button className='decrease' onClick={decrease}>-</button>
        <span> {count} </span>
        <button className='increase' onClick={increase}>+</button>
        <div>
          {
            count === warning ?
              <small>Bingo!! You found the lucky number</small> : null
          }
        </div>

      </div>
      <br />
      <div>
        <label>Lütfen Rezonans Sayısını Giriniz</label>
        <br />
        <input id="txtbox" type="text" value={warning} onChange={(e) => setWarning(Number(e.target.value))} placeholder="Lütfen Sayı Giriniz" />
        <br /><label>Girilen Değer {warning}</label>
      </div>
    </div>
  )
}

export default App
