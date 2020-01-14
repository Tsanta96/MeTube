import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import VideoSearchItem from './video_search_item';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     searchField: "",
        //     matchedVideos: []
        // }
    }

    componentDidMount(){
        debugger;
        if (this.props.search === 'undefined'){ 
            this.props.search = []
        }
        this.props.fetchSearchVideos(this.props.search).then(() => {
           this.props.fetchUsers()
        })
    }

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
        debugger;
        console.log(this.props.videos)
        let videoMatches = this.props.videos.map((video,ind) =>{
        const user = this.props.users[video.user_id]
            return (
                <ul>
                    <li key={ind}>
                        <VideoSearchItem key={video._id} video={video} user={user}/>
                    </li>
                </ul>
            )
        })

        return (
            <div className="search-outer"> 
                {/* <ul className="search-list"> 
                    <div className="search-main">
                        <div className="search-results">{`Search Results for "${this.props.search}"`}</div>
                        {videoMatches.length > 0 ? (
                            videoMatches 
                        ):(
                            <p className="no-result-message">Sorry! No matches"</p>
                        )}
                    </div>
                </ul>  */}
                {videoMatches}
             </div>
        )
    }
}

export default withRouter(SearchBar);