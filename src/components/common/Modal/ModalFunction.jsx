import { deletePost, reportPost, putEditPost } from "../../../api/post";
import { deleteComment, reportComment } from "../../../api/comment";

// 댓글 삭제
export const deleteUserComment = async (
  token,
  pickedPost,
  commentData,
  setIsDeleteComment
) => {
  try {
    await deleteComment(token, pickedPost, commentData);
    setIsDeleteComment(true);
  } catch (error) {
    console.error("Error delete user comment:", error);
  }
};

// 댓글 신고
export const reportUserComment = async (token, pickedPost, commentData) => {
  try {
    await reportComment(token, pickedPost, commentData);
    alert("신고되었습니다!");
  } catch (error) {
    console.error("Error report user comment:", error);
  }
};

// 게시글 삭제
export const deletePostData = async (userToken, pickedPost, setIsDelete) => {
  try {
    await deletePost(userToken, pickedPost);
    setIsDelete(true);
    alert("게시글이 삭제되었습니다!");
  } catch (error) {
    console.error("Error delete user posts:", error);
  }
};

// 게시글 신고
export const reportUserPost = async (loginData, pickedPost) => {
  try {
    await reportPost(loginData, pickedPost);
    alert("신고되었습니다!");
  } catch (error) {
    console.error("Error report user posts:", error);
  }
};

// 게시글 복사
// export const sharePost = () => {
//   // navigator.clipboard.writeText('');
//   alert('주소가 복사되었습니다.');
// };

// 게시글 수정
export const modifyPost = async (userToken, pickedPost) => {
  try {
    await putEditPost(userToken, pickedPost);
  } catch (error) {
    console.error("Error delete user posts:", error);
  }
};

// 프로필 변경
export const resetProfile = async (accountName, navigate) => {
  navigate(`/profile/${accountName}/editProfile`);
};

// 로그아웃
export const logOut = async (handleResetState, setLoginState, navigate) => {
  handleResetState();
  setLoginState(false);
  localStorage.removeItem("token");
  navigate("/");
};
