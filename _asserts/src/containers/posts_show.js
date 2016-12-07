import React, { Component, PropTypes } from 'react';
import { fetchMatchedPost, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import $ from 'jquery';

class PostsShow extends Component {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        console.log('12 -- this.props.params.id '+this.props.params.id);
        this.props.fetchMatchedPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then((resp) => {
                console.log('23 -- Delete Post response is: ', resp);
                this.context.router.push('/');
            }, (err) => {
                console.log('Delete Post Error is: ', err);
            })
    }

    /*showPopup() {
        let labelPopup = $('p.label-success');
        console.log('labelPopup is: ', labelPopup);
        labelPopup.popover();
    }*/

    render() {
        const sp = this.props.propSigPost;

        if (!sp) {
            return (
                <div className="spinner-container">
                    <div className="post-loader">Loading...</div>
                </div>
            );
        }
        return (
            <div>
                <Link to="/" className="btn btn-info fwb-fz1m">
                    Back_Home_Page
                </Link>
                <button type="button" className="btn btn-danger pull-right fwb-fz1m"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete_Post
                </button>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {sp.title}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <a className="label label-success fz2em" title="Dismissible popover" data-placement="bottom" 
                            data-toggle="popover" data-trigger="focus" data-content="haha-popup">
                            {sp.categories} with popup by click it -- ignore it.
                        </a>
                        <a href="#" title="Dismissible popover" data-toggle="popover" data-trigger="focus" data-content="Click anywhere in the document to close this popover">Click me</a>
                        <div className="well well-lg mt1em">
                            {sp.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('43 -- state is', state);
    return { propSigPost: state.posts.post }
}

export default connect(mapStateToProps, { fetchMatchedPost, deletePost })(PostsShow);