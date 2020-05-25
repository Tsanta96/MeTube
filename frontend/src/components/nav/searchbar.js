import React from "react";
// import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import VideoSearchItem from "./video_search_item";
// import '../stylesheets/splash.css';
// import '../stylesheets/search.css';

class SearchBar extends React.Component {
  componentDidMount() {
    if (this.props.search === "undefined") {
      this.props.search = [];
    }
    this.props.fetchSearchVideos(this.props.search).then(() => {
      this.props.fetchUsers();
    });
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (this.props.search === "undefined") {
      this.props.search = [];
    }
    // debugger;
    if (prevProps.search !== this.props.search) {
      this.props.fetchSearchVideos(this.props.search).then(() => {
        this.props.fetchUsers();
      });
    }
  }

  render() {
    let videoMatches = this.props.videos.map((video, ind) => {
      debugger;
      const user = this.props.users[video.user_id];
      return (
        <li key={ind}>
          <VideoSearchItem key={video._id} video={video} user={user} />
        </li>
      );
    });

    const noResult = () => {
      if (this.props.videos.data === undefined) {
        return <p className="no-result-message">Sorry! No matches</p>;
      }
    };
    return (
      <div className="search-outer">
        <ul className="search-list">
          <div className="search-main">
            <div className="search-results">{`Search Results for "${this.props.search}"`}</div>
            {videoMatches.length > 0 ? videoMatches : noResult}

            {/* // <p className="no-result-message">Sorry! No matches</p> */}
          </div>
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchBar);
