import React, { Component } from 'react';

class Keyboard extends Component {

      
    render() { 

        return (                
                <div className="keyboards">
                    <div className="row">
                        <button onClick={this.props.onClear} className="colspan">AC</button>
                        <button onClick={this.props.onDelete}>Del</button>
                        <button onClick={this.props.onOperation}>+</button>
                    </div>
                    <div className="row">
                        <button onClick={this.props.onClick}>1</button>
                        <button onClick={this.props.onClick}>2</button>
                        <button onClick={this.props.onClick}>3</button>
                        <button onClick={this.props.onOperation}>-</button>
                    </div>
                    <div className="row">
                        <button onClick={this.props.onClick}>4</button>
                        <button onClick={this.props.onClick}>5</button>
                        <button onClick={this.props.onClick}>6</button>
                        <button onClick={this.props.onOperation}>*</button>
                    </div>
                    <div className="row">
                        <button onClick={this.props.onClick}>7</button>
                        <button onClick={this.props.onClick}>8</button>
                        <button onClick={this.props.onClick}>9</button>
                        <button onClick={this.props.onOperation}>/</button>
                    </div>
                    <div className="row">
                        <button onClick={this.props.onDecimal} className="left_curve">.</button>
                        <button onClick={this.props.onClick}>0</button>
                        <button onClick={this.props.onEqual} className="colspan right_curve">=</button>
                    </div>
                </div>       
            
            );
    }
}
 
export default Keyboard;