import { authInstance } from "./axiosInstance";

/* content 업로드 */
export const postContentUpload = async (content, imageString, token) => {
  const apiUrl = 'https://api.mandarin.weniv.co.kr/post';

  const postData = {
    'post': {
      'content': content,
      'image': imageString
    }
  };

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-type': 'application/json'
  };

  try {
    const response = await authInstance.post(apiUrl, postData, { headers: headers });
    if (response.status === 200 || response.status === 201) {
      console.log("게시물이 성공적으로 업로드 되었습니다.");
      return response.data;
    } else {
      console.error("게시물 업로드에 실패하였습니다.");
      return null;
    }
  } catch (error) {
    console.error("API 요청 중 에러가 발생하였습니다:", error);
    return null;
  }
};

/* 팔로우 게시물 */
export const getFollowFeed = async (limit, skip, token) => {
  try {
    const response = await authInstance.get(`/post/feed`, {
      params: {
        limit,
        skip
      }
    });
    const { posts } = response.data;
    return posts;
  } catch (error) {
    console.log(error);
  }
};

/* 나의 게시글 목록 */
export const getMyPost = async (token, accountname) => {
  try {
    const response = await authInstance.get(
      `/post/${accountname}/userpost/?limit=Number&skip=Number`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 상세 게시물 */
export const getPostDetail = async (postId) => {
  try {
    const response = await authInstance.get(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 수정 */
export const putEditPost = async (token, post, postId) => {
  try {
    const response = await authInstance.put(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 삭제 */
export const deletePost = async (token, postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 신고 */
export const reportPost = async (token, postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/report`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 개인 게시물 정보 */
export const getUserPosts = async (token, accountname, limit, skip) => {
  try {
    const response = await authInstance.get(
      `/post/${accountname}/userpost/?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 좋아요 */
export const postLike = async (token, postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/heart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 좋아요 취소 */
export const deleteLike = async (token, postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}/unheart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
