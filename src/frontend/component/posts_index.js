import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import ListTest from './posts_index';
import {Button, IconButton} from 'react-toolbox/lib/button';

class PostsIndex extends Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return (
          <ListItem
            className="add"
            key={post.id}
            onClick={() => this.props.router.replace("posts/"+post.id)}
            avatar='https://upload.wikimedia.org/wikipedia/commons/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg'
            caption={post.title}
            legend={post.categories}
            rightIcon="star"/>
      );
    });
  }
  render(){

    return (
      <div>
        <div>
          <Button
          onClick={() => this.props.router.replace('/posts/new')}
          icon='add'
          label='Add a Post'
          flat primary />
        </div>
    <List ripple={false}>
      <ListSubHeader caption='Posts' />
      <ListItem
      avatar='https://upload.wikimedia.org/wikipedia/commons/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg'
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
      rightIcon='star'
    />
    <ListItem ripple={false}
      avatar='https://upload.wikimedia.org/wikipedia/commons/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg'
      caption='Ozymandias'
      legend='Adrian Veidt'
      rightIcon='star'
    />
      {this.renderPosts()}
    </List>
      </div>
    );
  }

}

/*function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts }, dispatch);
}*/


function mapStateToProps(state){
  return {posts: state.posts.all};
}
export default connect(mapStateToProps, { fetchPosts })(withRouter(PostsIndex));
