import React, {useState, useContext} from 'react';
import Lottie from 'react-lottie';
import $ from 'jquery';
import './App.css';

function App() {

  let animationData: any = null;

  $.ajax({
    url: 'http://localhost:4000/animation',
    method: 'GET',
    dataType: 'json',
    success: (data) => {
      animationData = data;
      console.log(animationData)
    }
  })

  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: $.get,
  //   renderer: 'svg',
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <div className="App">
{/* 
      <Lottie 
        options={defaultOptions}
      />
   */}
    </div>
  );
}

export default App;
