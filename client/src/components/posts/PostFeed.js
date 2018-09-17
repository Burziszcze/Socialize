import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 4,
      totalPages: 10
    };
    // this.handleClick = this.handleClick.bind(this); // no mather if i use arrow functions
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  nextPage = (event) => {
    if (this.state.currentPage < this.state.totalPages)
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
  }

  prevPage = (event) => {
    if (this.state.currentPage > 1)
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
  }
  render() {
    const { currentPage, postsPerPage } = this.state;
    const { posts } = this.props;
    // Logic for displaying todos
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // render posts
    const renderPosts = currentPosts.map(post => <PostItem key={post._id} post={post} />);
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    // Loogic for displaying previous/next
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-item">
          <a
            className="page-link"
            key={number}
            id={number}
            onClick={this.handleClick}
          >{number}
          </a>
        </li>
      );
    });

    return (
      <div className="commentBox">
        {renderPosts}
        <nav className="bg-light">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" onClick={this.prevPage}>Previous</a></li>
            {renderPageNumbers}
            <li className="page-item"><a className="page-link" onClick={this.nextPage}>Next</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;



