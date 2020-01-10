import React from 'react'

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            userId: this.props.currentUser._id,
            videoURL: ""
        }
    }
    render() {
        return (
            <div className="video-upload-form">
                <form>
                    <label className="video-title">Title
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            />
                    </label>
                    <label className="video-upload">Upload!
                        <input
                            type="file"
                            value={this.state.title}
                            onChange={this.update('title')}
                            />
                    </label>
                </form>
            </div>
        )
    }
}

export default VideoUpload
