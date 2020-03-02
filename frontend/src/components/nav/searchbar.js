import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import VideoSearchItem from './video_search_item';
// import '../stylesheets/splash.css';
// import '../stylesheets/search.css';

class SearchBar extends React.Component {
    // constructor(props) {
    //     super(props)

        // this.state = {
        //     searchField: "",
        //     matchedVideos: []
        // }
        // this.videoMatches = this.videoMatches.bind(this);
    // }

    componentDidMount(){
        
        if (this.props.search === 'undefined'){ 
            this.props.search = []
        }
        this.props.fetchSearchVideos(this.props.search).then(() => {
           this.props.fetchUsers()
        })
    }

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
        if (this.props.search === 'undefined') {
            this.props.search = []
        }

        if (prevProps.search !== this.props.search) {
             this.props.fetchSearchVideos(this.props.search).then(() => {
             this.props.fetchUsers()
        })
      }
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.search === 'undefined') {
    //         this.props.search = []
    //     }
    //     this.props.fetchSearchVideos(this.props.search).then(() => {
    //         this.props.fetchUsers()
    //     })
    // }

    // componentDidUpdate(prevProps){
    //     if (prevProps.location.pathname != this.props.location.pathname) {
    //         this.setState({
    //             searchField: "",
    //             matchedVideos: []
    //         })
    //     }
    // }

    

    // update(field){
    //     return e => {
    //         let matches = this.props.videos
    //             .filter(video => video.title.toLowerCase())
    //                 .includes(e.target.value.toLowerCase())
            
    //         if(!e.target.value) matches = []

    //         this.setState({
    //             [field]: e.target.value, 
    //             matchedVideos: matches
    //         })
    //     }
    // }


    
    render(){
        // debugger;
        let videoMatches = this.props.videos.map((video, ind) => {
        const user = this.props.users[video.user_id]
            return (
                <li key={ind}>
                    <VideoSearchItem key={video._id} video={video} user={user} />
                </li>
            )
        })
      
        
        return (
           
            <div className="search-outer">  
             
                <ul className="search-list"> 
                    <div className="search-main">
                        <div className="search-results">{`Search Results for "${this.props.search}"`}</div>
                        {videoMatches.length > 0 ? (
                            videoMatches
                        ):(                      
                            <p className="no-result-message">Sorry! No matches</p>
                         
                        )}
                    </div>
                </ul> 
             </div>
        )
    }
}

export default withRouter(SearchBar);