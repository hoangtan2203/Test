import "./../src/App.css";
import React, { useState } from "react";

function App() {

  // khởi tạo giá trị của A
  const [boxA, setBoxA] = useState([""]);
  // khởi tạo giá trị của B
  const [boxB, setBoxB] = useState([""]);
  // trạng thái
  const [status, setStatus] = useState('Same point')
  // button reset
  const [reset, setReset] = useState(false);

  // chức click
  const handleClickRace = () => {
    // tạo một số ngẫu nhiên từ Math.random() chạy từ 0 -> 1
    const random = Math.random();

    // tham chiếu đến boxA và boxB
    let newBoxA = [...boxA];
    let newBoxB = [...boxB];

    if (random > 0.5) {
      newBoxA.push('');
      setBoxA(newBoxA);
    } else {
      newBoxB.push('');
      setBoxB(newBoxB)
    }
    
    // cập nhật trạng thái (status) giữa A và B
    if (newBoxA.length > newBoxB.length) {
      setStatus('A is winning')
    } else if (newBoxA.length < newBoxB.length) {
      setStatus('B is winning')
    } else{   
      setStatus('Same point')
    }
    // Hiện nút reset khi có box sinh ra
    setReset(true)
  };
  
  // reset box
  const handleResetBox = () => {
    setBoxA([""]);
    setBoxB([""]);
    setReset(false);
    setStatus('Same point')
  }

  return (
    <div className="App">
      <h1>{status}</h1>
      <p>Charactor A</p>
      <div className="list-box">
        {boxA.map(item => (
          <div className="box">{item}</div>
        ))}

      </div>
      <p>Charactor B</p>
      <div className="list-box">
        {boxB.map(item => (
          <div className="box">{item}</div>
        ))}

      </div>
      <button className="btn" onClick={handleClickRace}>Race</button>
      {reset && <button className='btn' onClick={handleResetBox}>Reset</button>}
    </div>
  );
}

export default App;
