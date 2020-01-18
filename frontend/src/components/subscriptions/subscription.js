import React from 'react';
import VideoIndexItemContainer from '../videos/video_index_item_container';
import '../stylesheets/subscription.css';

class Subscription extends React.Component {
  constructor(props){
    super(props);

    this.renderSubscriptionNames = this.renderSubscriptionNames.bind(this);
    this.renderSubscriptionVideos = this.renderSubscriptionVideos.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchVideos();
    this.props.fetchSubscriptions();
  }

  renderSubscriptionNames(){
    let users = Object.values(this.props.users);
    let subs = Object.values(this.props.subscriptions);

    let merged = [];
    users.forEach(user => {
      subs.forEach(sub => {
        if(user._id === sub.subscription_id) {
          merged.push({ ...user, ...sub})
        }
      })
    })

    let usernames = merged.map(name => name.username)
    // debugger
    let uniqSubIds = [];
    usernames.forEach(name => { 
      if(!uniqSubIds.includes(name)) {
          uniqSubIds.push(name)
      }}
    )
    return uniqSubIds;
  }

  renderSubscriptionVideos(){
    // let users = Object.values(this.props.users);
    let subs = Object.values(this.props.subscriptions)
    let videos = Object.values(this.props.videos);

    let mergedVideos = [];
    videos.forEach(video => {
      subs.forEach(sub => {
        if(video.user_id === sub.subscription_id){
          mergedVideos.push({...sub, ...video})
        }
      })
    }) 

    // let merged = subs.concat(videos).reduce((s, v) => {
    //   s[v.id] = v._id;
    //   return s;
    // }, {})
    // merged = Object.keys(merged).map(e => {
    //   return { id: e, _id: merged[e]}
    // })
    // debugger
    
    return (
      <ul className='video-index-ul'>
        {mergedVideos.map(video => 
          <li>
            <VideoIndexItemContainer key={video._id} video={video} />
          </li>
        )}
      </ul>
    )
  }

  render(){
    return (
      <div className="subscription-cont">
        Subscription Test Page
        {/* <div>
          <ul>
            {this.renderSubscriptionNames().map((id, idx) => {
              return <li key={idx}>{id}</li>;
            })}
          </ul>
        </div> */}
        
        <div>{this.renderSubscriptionVideos()}</div>
      </div>
    );
  }

}

export default Subscription;