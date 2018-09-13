// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import PostItem from './PostItem';
// import Paginate from 'react-paginate';

// class PostFeed extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: this.props,
//       currentPage: 1,
//       postsPerPage: 4
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(e) {
//     this.setState({
//       currentPage: Number(e.target.id)
//     });
//   }


//   render() {
//     // const { posts } = this.props;
//     const { posts, currentPage, postsPerPage } = this.state;

//     // Logic for displaying todos
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPost = posts.slice(indexOfLastPost, indexOfFirstPost);

//     const renderPosts = currentPost.map((post, index) => {
//       return posts.map(post => <PostItem key={post._id} post={post} />);
//     });

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map(number => {
//       return (
//         <li
//           className="page-item"
//           key={number}
//           id={number}
//           onClick={this.handleClick}
//         >
//           {number}
//         </li>
//       );
//     });

//     // return posts.map(post => <PostItem key={post._id} post={post} />);
//     return (
//       <div>
//         <div className="posts">{renderPosts}</div>
//         <ul className="page-numbers">{renderPageNumbers}</ul>
//       </div>
//     );
//   }
// }

// PostFeed.propTypes = {
//   posts: PropTypes.array.isRequired
// };

// export default PostFeed;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import ReactPaginate from 'react-paginate';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    const renderPosts = posts.map(post => <PostItem key={post._id} post={post} />);
    console.log(`we have ${posts.length} posts already`);

    return (
      <div className="commentBox">
        {renderPosts}
        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={posts}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    )
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;



