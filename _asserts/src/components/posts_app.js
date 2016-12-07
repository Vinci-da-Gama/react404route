import React, { Component } from 'react';

class PostsApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	The App Level.
            	{this.props.children}
            </div>
        );
    }
}

export default PostsApp;