import styled from "styled-components";

export const MyProfileUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 26px;
  border-bottom: 1px solid rgb(219, 219, 219);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 38px;
  gap: 38px;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  width: 110px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const FollowerNum = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 9px;
`;
export const Follower = styled.div`
  text-align: center;
  color: #767676;
  font-size: 14px;
`;
export const FollowingNum = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 9px;
`;
export const Following = styled.div`
  text-align: center;
  color: #767676;
  font-size: 14px;
`;

export const UserSpan = styled.span`
  margin-top: 16px;
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 16px;
`;

export const AccountSpan = styled.span`
  font-size: 12px;
  color: #767676;
  margin-bottom: 16px;
`;

export const IntroSpan = styled.span`
  font-size: 14px;
  color: #767676;
`;

export const ButtonWrap = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 12px;
`;

export const CommentButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
`;

export const CommentImg = styled.img`
  width: 20px;
  aspect-ratio: 1/1;
`;

export const ShareButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
`;

export const ShareImg = styled.img`
  width: 20px;
  aspect-ratio: 1/1;
`;
