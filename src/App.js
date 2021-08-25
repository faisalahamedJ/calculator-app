import React , { Component } from 'react';
import './App.css';
import Keyboard from './components/keyboard';
import Display from './components/display';


class App extends Component {
  state ={
    data : '',
    firstValue : 0,
    nextValue : false,
    operator : '',
    id : window.localStorage.length,
    calculate : {
        '/' : (firstNumber, secondNumber) => firstNumber / secondNumber,
        '*' : (firstNumber, secondNumber) => firstNumber * secondNumber,
        '-' : (firstNumber, secondNumber) => firstNumber - secondNumber,
        '+' : (firstNumber, secondNumber) => firstNumber + secondNumber,        
    },
    
    
}
handleClick = (event) => {
  this.setState({data : this.state.data+ event.target.textContent});
}

handleDelete = () =>{
  this.setState({data : this.state.data.slice(0,-1)});

}

handleClear = () =>{
  this.setState({data : ''});
  this.setState({firstValue : ''})
  this.setState({operator : ''});
}


handleOperation = (e) => {
  if(!this.state.firstValue){
  this.setState({firstValue : Number(this.state.data)});
  this.setState({data : ''});
  }
  else{
      this.setState({data : ''})
  }
  this.setState({nextValue : true});
  this.setState({operator : e.target.textContent})
}

handleDecimal = () =>{
  if(!this.state.data.includes('.'))
  {
      this.setState({data : this.state.data + '.'})
  }
}

handleEqual = () =>{
  const currentValue = Number(this.state.data);
  if(!this.state.firstValue || !currentValue){
    return
  }
  
  const calculation = this.state.calculate[this.state.operator](this.state.firstValue, currentValue);

  let fullEquation = `${this.state.firstValue} ${this.state.operator} ${currentValue} = ${calculation} ;`;
  window.localStorage.setItem(this.state.id,JSON.stringify(fullEquation));
  this.setState({id : this.state.id + 1})

  this.setState({firstValue: calculation})
  this.setState({data: calculation}); 
}

handleDeleteHistory = () => {
  window.localStorage.clear();
  this.setState({id : 0});

}



render(){
  return (
    <div className='container'>
      <Display 
      data = {this.state.data}
      firstValue = {this.state.firstValue}
      operator = {this.state.operator}
      id = {this.state.id}
      onDeleteHistory = {this.handleDeleteHistory}
      />
      <Keyboard 
      onClick = {this.handleClick}
      onClear = {this.handleClear}
      onDelete = {this.handleDelete}
      onOperation = {this.handleOperation}
      onEqual = {this.handleEqual}
      onDecimal = {this.handleDecimal}
      />
    </div>
  );
}
}

export default App;
