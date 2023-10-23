import { instance, imgInstance } from "./axiosInstance";

/* 이메일 중복 검사 */
export const postEmailDuplicate = async (email) => {
  const emailData = {
    user: {
      email: email
    }
  };
  const response = await instance.post("/user/emailvalid", emailData);
  return response.data;
};

/* 회원가입 */
export const postUserSignup = async (
  username,
  email,
  password,
  accountname,
  intro,
  image
) => {
  const userData = {
    user: {
      username: username,
      email: email,
      password: password,
      accountname: accountname,
      intro: intro,
      image: image
    }
  };
  const response = await instance.post("/user/", userData);
  return response.data;
};
