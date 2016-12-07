import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createNewPost } from '../actions/index';

import renderInputField from '../components/form-fields/inputField';
import renderTextAreaField from '../components/form-fields/textareaField';
import validate from '../actions/synValidate';
import asyncValidate from '../actions/asynValidate';
import warn from '../actions/warning';

class PostsNew extends Component {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        console.log('29 -- name attribute in Field tag is actually uploaded obj key.');
        this.props.createNewPost(props)
        .then((res) => {
            this.context.router.push('/');
        }, (err) => {
            console.log('38 -- err is: ', err);
        });
    }

    render() {
        // const { handleSubmit } = this.props;
        const { handleSubmit, pristine, reset, submitting, invalid } = this.props;

        return (
            <div>
                <div className="page-header">
                    <h3>New Post &nbsp;&nbsp;&nbsp;<small>post_new_blog</small></h3>
                </div>
                <form role="form" noValidate onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    <Field name="title" component={ renderInputField } type="text" label="PostTitle" />
                    
                    <Field name="categories" component={ renderInputField } type="text" label="PostCategories" />

                    <Field name="age" component={ renderInputField } type="number" label="PostAge" />

                    <Field name="email" component={ renderInputField } type="email" label="PostEmail" />

                    <Field name="content" component={ renderTextAreaField } label="PostContent" />

                    <button type="submit" className="btn btn-lg btn-primary" disabled={pristine || submitting || invalid}>
                        Submit
                    </button>
                    <Link to="/" className="btn btn-lg btn-warning pull-right" onClick={reset}>
                        Cancle
                    </Link>
                </form>
                <img src="../_asserts/img/Redux_fieldObj_Argument.png" className="img-responsive maxheight-500px" alt="fieldObj_reduxForm" />
            </div>
        );
    }
}

PostsNew = reduxForm({
    form: 'NewPostForm',
    validate,
    warn,
    asyncValidate,
    asyncBlurFields: ['title']
})(PostsNew);

PostsNew = connect(null, { createNewPost })(PostsNew);

export default PostsNew;