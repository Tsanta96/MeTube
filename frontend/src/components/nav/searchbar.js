import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        // this.state = {
        //     searchField: "",
        //     matchedVideos: []
        // }
    }

    componentDidMount(){

        if (this.props.search === 'undefined'){
            this.props.search = []
        }
        this.props.fetchSearchVideos({search: this.props.search}).then(() => {
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
        let videoMatches = this.props.videos.map(video =>{
            
            const user = this.props.users[video.user_id]

            return (
                <VideoSearchItem key={video.id} video={video} user={user} />
            )

             
        })
        return (
            <div className="search-outer">
                <input className="user-search" type="text" placeholder="Search Users" onChange={this.update('searchField')} value={this.state.searchField} />    
                   <ul className="search-list"> 
                    <div className="search-main">
                      <div className="search-results">{`Search Results for "${this.props.matches}"`}</div>
                      {videoMatches.length > 0 ? (
                           videoMatches 

                        ):(
                            <p className="no-result-message">Sorry! No matches"</p>
                        )}
        
                    </div>
                   </ul> 
             </div>
        )
    }
}

export default withRouter(SearchBar);