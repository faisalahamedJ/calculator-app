import React, { Component } from 'react';


class Display extends Component {
    state = {
        content : '',
    }




    handleChange = (e) =>{

        let history = document.querySelector('.history');
                history.textContent = '';
        switch(e.target.value){
            case 'all':                
                 return filterHistory(';');
            case 'add':
                
                return filterHistory('+');
            case 'sub':
                return filterHistory('-');
            
            case 'mult':
                return filterHistory('*');
        
            case 'divide':
                return filterHistory('/');
            
        }

        function filterHistory(x){
            for(let i = 0; i<=window.localStorage.length-1;i++){
                let f = window.localStorage.getItem(i);
                if(f.includes(x)){
                    history.innerHTML += f + '<br>' + '<br>';
                }

            
            };

            
        }

        
        
    }

    

    render() { 
        
        let {data, firstValue, operator} = this.props;
        return ( 
            <div className="output">
                    <div className="result">
                        {data}
                    </div>
                    <div className="prev_result">
                        {firstValue}
                    </div>
                    <div className="operand_display">
                    {operator}
                    </div>
                    <button  className="clear_history" onClick= {this.props.onDeleteHistory}>Clear History</button>
                    <div className="history">
                        {this.state.content}
                    </div>
                    <select className = "filter_box" value={this.state.value} onChange= {this.handleChange}>
                        <option value="">History</option>
                        <option value="all">All</option>
                        <option value="add">Addition</option>
                        <option value="sub">Subtraction</option>
                        <option value="mult">Multiplication</option>
                        <option value="divide">Division</option>
                    </select>
            </div>
         );
    }
}
 
export default Display;