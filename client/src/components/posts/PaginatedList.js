// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import PostItem from './PostItem';

// class PaginatedList extends Component {
//   constructor(props) {
//     super(props);

//     // By default let's start the page by 0...
//     this.state = { currentPage: 0 };

//     this.onClickPageNumber = this.onClickPageNumber.bind(this);
//   }
//   getNumberOfPages(posts, itemsPerPage) {

//     // Calculate the number pages to be displayed...
//     const numberOfPages = Math.ceil(posts.length / itemsPerPage);
//     return Array.from(Array(numberOfPages).keys());
//   }
//   paginatedLists(posts, itemsPerPage) {
//     const { currentPage } = this.state;

//     if (!Array.isArray(posts)) new Error('Invalid supplied Lists.');
//     // Use array slice to create Paginated lists...
//     return posts.slice(
//       currentPage * parseInt(itemsPerPage, 0),
//       (currentPage + 1) * parseInt(itemsPerPage, 0)
//     );
//   }

//   onClickPageNumber(page) {
//     this.setState({ currentPage: page });
//   }
//   render() {
//     const { currentPage } = this.state;
//     const { posts, itemsPerPage } = this.props;

//     return (
//       <div>
//         {
//           this.props.render(
//             this.paginatedLists(posts, itemsPerPage)
//           )
//         }
//         <PostItem
//           key={post._id}
//           post={post}
//           items={this.getNumberOfPages(posts, itemsPerPage)}
//           currentPage={currentPage}
//           onClickPageItem={this.onClickPageItem}
//         />
//       </div>
//     )
//   }
// }

// PaginatedList.propTypes = {
//   posts: PropTypes.array.isRequired
// };

// export default PaginatedList;