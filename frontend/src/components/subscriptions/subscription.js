import React from 'react';
import '../stylesheets/subscription.css';

class Subscription extends React.Component {
  constructor(props){
    super(props);

    this.renderSubscriptions = this.renderSubscriptions.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchSubscriptions();
  }

  renderSubscriptions(){
    let subIds = Object.values(this.props.subscriptions.map(sub => sub.subscription_id))
    
    // debugger
    let uniqSubIds = [];
    subIds.forEach(id => { 
      if(!uniqSubIds.includes(id)) {
          uniqSubIds.push(id)
      }}
    )
    return uniqSubIds;
  }

  render(){
    // debugger
    return (
      <div className='subscription-cont'>
        Subscription Test Page
        <ul>
          {this.renderSubscriptions().map((id, idx) => {
            return (
            <li key={idx}>{id}</li>
            )
          })}
        </ul>
      </div>
    )
  }

}

export default Subscription;