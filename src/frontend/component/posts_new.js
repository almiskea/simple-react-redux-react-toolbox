import React, { Component,PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import Input from 'react-toolbox/lib/input';
import { Link, withRouter } from 'react-router';
import {Button, IconButton} from 'react-toolbox/lib/button';


class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  onSubmit(props){
    this.props.createPost(props)
    .then(() => {
      this.props.router.replace("/");
    })
  }

  render(){
    const { fields: {title, categories, content}, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <h3>Create A New Post </h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <Input type='text' label='title' name='title'   {...title}/>
          <div className="text-help text-danger">
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <Input type='text' label='categories' name='categories'   {...categories}/>
          <div className="text-help text-danger">
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <Input type='text' label='content' name='content' multiline  {...content}/>
          <div className="text-help text-danger">
          </div>
        </div>

        <Button type="submit">
          Submit
        </Button> <Button onClick={() => this.props.router.replace("/")}>
          Cancel
        </Button>

       </form>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = 'Enter a username';
  }
  if(!values.categories){
    errors.categories = 'Enter Categories';
  }
  if(!values.content){
    errors.content = 'Enter Content';
  }
  return errors;
}
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
},null,{ createPost })(withRouter(PostsNew));
