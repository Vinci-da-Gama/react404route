import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchAllPosts();
    }

    renderList() {
        return this.props.propPosts.map((eachPost) => {
            if (eachPost.categories !== null) {
                return (
                    <li className="list-group-item" key={eachPost.id}>
                        <Link to={`posts/${eachPost.id}`}>
                            <span className="pull-right">
                                {eachPost.categories}
                            </span>
                            <strong className="text-primary">{eachPost.title}</strong>
                        </Link>
                    </li>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <Link to="posts/new" className="btn btn-primary">
                    Add_New_Post
                </Link>
                <ul className="list-group">
                    { this.renderList() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('40 -- state is: ', state);
    return { propPosts: state.posts.all };
};

export default connect(mapStateToProps, { fetchAllPosts })(PostsIndex);