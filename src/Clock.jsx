import React, {Component} from 'react';


class Clock  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          }
    }

    componentWillMount(){
            this.GetTimeUntil(this.props.Deadline)
    }

   componentDidMount()
   {
       setInterval(() => {this.GetTimeUntil(this.props.Deadline)
           
       }, 1000);
   }

   loading0 (num) { 
    if (num <10) {
        return '0'+ num;
    } 
    return num;
}
GetTimeUntil(Deadline){
const time = Date.parse(Deadline)- Date.parse(new Date());
const seconds= Math.floor((time/1000)%60);
const minutes=Math.floor((time/1000/60)%60);
const hours=Math.floor(time/(1000*60*60)%60);
const days=Math.floor(time/(1000*60*60*24));
//console.log('seconds',seconds, 'minutes', minutes, 'hours', hours, 'days',days);
this.setState({days, hours, minutes, seconds})
}

    render() { 
      //  this.GetTimeUntil(this.props.Deadline)
        return ( 
            <div>
            <div className='App-day'>{this.loading0(this.state.days)} Days</div>
            <div className='Clock-hours'>{this.loading0(this.state.hours)} Hours</div>
            <div className='Clock-minutes'>{this.loading0(this.state.minutes)} Minutes</div>
            <div className='Clock-seconds'>{this.loading0(this.state.seconds)} Seconds</div>
            </div>
         );
    }
}
 
export default Clock;