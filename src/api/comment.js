import { authInstance } from './axiosInstance';

/* 댓글 작성 */
export const postComment = async (token, postId, comment) => {
    try {
      const commentData = {
        comment: {
          content: comment,
        },
      };
      const response = await authInstance.post(
        `/post/${postId}/comments`,
        commentData
      );
      return response.data;
    } catch (error) {
      console.error('Error posting comment:', error.response);
      throw error;
    }
  };

/* 댓글 리스트 */
export const getComment = async (postId, token) => {
  try {
    const response = await authInstance.get(`/post/${postId}/comments`);
    if (response.status !== 200 || !response.data) {
        throw new Error("Failed to fetch comments.");
      }
  
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  };

/* 댓글 삭제 */
export const deleteComment = async (token, postId, comment) => {
  try {
    const response = await authInstance.delete(
      `/post/${postId}/comments/${comment.id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 댓글 신고 */
export const reportComment = async (token, postId, comment) => {
  try {
    const response = await authInstance.post(
      `/post/${postId}/comments/${comment.id}/report`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
