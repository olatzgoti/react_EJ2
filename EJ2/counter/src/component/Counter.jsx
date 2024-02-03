import React from 'react'


export default Counter = (props) =>{


    increment =()=> {

    this.props.counter + 1;

    }
    return (
        <div>

            <p>Counter : {this.props.counter}</p>
            <button onClick={this.increment}>+</button>

        </div>
    )

}