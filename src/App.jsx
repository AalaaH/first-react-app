import React, { Component } from 'react';
import './App'
import Clock from'./Clock'
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Deadline:'25 November 2020',
            Newdeadline: ' '
         }
    }
    changeddate(){
        this.setState({Deadline:this.state.Newdeadline})
    }
    render() { 
        return ( 
        <div className='App'>
            <div>
        <div className='App-title'>CountDown to {this.state.Deadline}</div>
              <Clock
              Deadline={this.state.Deadline}/>
            </div>
            <Form inline>
                <FormControl className='Deadline-input'
                placeholder='Date Place'
                onChange={event=> this.setState({Newdeadline: event.target.value})}></FormControl>
                <Button onClick={()=>this.changeddate()}>Submit</Button>
            </Form>


        </div> 
        );
    }
}
 
export default App;