import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    const renderPosts = posts.map(post => <PostItem key={post._id} post={post} />);
    console.log(`we have ${posts.length} posts already`);

    return (
      <div className="commentBox">
        {renderPosts}
      </div>
    )
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;



