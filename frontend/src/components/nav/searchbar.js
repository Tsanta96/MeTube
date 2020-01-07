import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class NavSearch extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            searchField: "",
            matchedVideos: []
        }
    }

    componentDidMount(){
        this.props.fetchVideos()
    }

    componentDidUpdate(prevProps){
        if (prevProps.location.pathname != this.props.location.pathname) {
            this.setState({
                searchField: "",
                matchedVideos: []
            })
        }
    }

    update(field){
        return e => {
            let matches = this.props.videos
                .filter(video => video.title.toLowerCase())
                    .includes(e.target.value.toLowerCase())
            
            if(! e.target.value) matches = []

            this.setState({
                [field]: e.target.value, 
                matchedVideos: matches
            })
        }
    }

    render(){
        return (
            <div> </div>
        )
    }
}