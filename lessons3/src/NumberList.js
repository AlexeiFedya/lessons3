import React from 'react';
import './nav.css'
 

export class NumberList extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      firstItemactive: 'Home',
	    };
	}

	
		 handleClick(item) {
       this.setState({firstItemactive:item});
			console.log('По ссылке кликнули.');
		}
	
	
	render() {
    const numbers = this.props.items;  /*props.numbers*/
    const listItems = numbers.map((item, index) =>
      <a onClick={()=>this.handleClick(item)} key={index} href="#" className={this.state.firstItemactive === item? "active": ""}>
        {item}
      </a>
    );
    return (
      <div className='navbar'>{listItems}</div>
    );
	};
}



/*export default NumberList;*/




/*export function TaskNavbar(props){	
  return (
    <div className="navbar">
      {props.items.map((item, index) => (
        <a key={index} href="#" className={props.firstActive === item ? "active" : "" } >{item}</a>
          ))}
    </div>
  );
}*/

