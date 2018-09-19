import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';
import Moment from 'react-moment';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div class="card mb-3">
        <div class="card-header">
          <b><a
            href={`/profile/${comment.name}`}
            className="text-center">{comment.name} </a></b>
          <small><Moment fromNow>{comment.date}</Moment></small>
        </div>
        <div class="card-body mb-3">
          <div className="row">
            <div className="col-sm-2">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.avatar}
                alt=""
              />
              <br />
            </div>
            <div className="col-md-10">
              <p className="card-text lead">{comment.text}</p>
              <hr />
              {comment.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                  type="button"
                  className="btn btn-danger mr-1"
                >delete comment
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
