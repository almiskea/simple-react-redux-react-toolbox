import React , { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost,deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsDetails extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }
  static contextTypes = {
    router: PropTypes.object
  };
  deleteAPost(){
    this.props.deletePost(this.props.params.id).then(() => {
      this.context.router.push('/');
    })
  }
      render() {
        if(!this.props.post){
          return <div>Loading ..... </div> ;
        }
        const { post } = this.props;
        return (
          <div>
          <Link to="/">Back to Posts</Link>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
            <button className="btn btn-danger pull-xs-right" onClick={this.deleteAPost.bind(this)}>Delete</button>
          </div>
        )
      }
}

function mapStateToProps(state){
  return { post: state.posts.post };
}
export default connect(mapStateToProps, {fetchPost,deletePost})(PostsDetails);
