import styled from "styled-components";

export const PostArticle = styled.article`
  display: flex;
  flex-direction: column;
`;
export const PostFlexWrap = styled.div`
  display: flex;
  position: relative;
`;

export const ProfileButton = styled.button`
  display: flex;
`;

export const PostProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;

export const PostNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 13.5px;
`;

export const UserSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const AccountSpan = styled.span`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
`;

export const Time = styled.p`
  position: absolute;
  top: 20px;
  right: 30px;
  font-weight: bold;
  font-size: 12px;
`;

export const DotButton = styled.button`
  margin-left: auto;
  width: 18px;
  height: 18px;
`;

export const DotImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const Wrap = styled.div`
  width: 358px;
  padding-left: 30px;
`;

export const FeedButton = styled.button``;

export const HealthWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 22px;
  margin-bottom: 11px;
  padding-bottom: 11px;
  font-size: 14px;
`;

export const HealthList = styled.li`
  font-weight: bold;
  & > span {
    display: inline-block;
    text-align: center;
    font-weight: 400;
  }
`;

export const PostContent = styled.p`
  margin: 16px 0;
  font-size: 14px;
  text-align: left;
`;

export const PostUploadImg = styled.img`
  width: 328px;
  border-radius: 10px;
`;

export const MessageImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const PostDay = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const HeartSpan = styled.span`
  margin-left: 6px;
`;

export const MessageSpan = styled.span``;

export const HeartButton = styled.button`
  display: flex;
  align-items: center; // 수직 중앙 정렬
`;

export const MessageButton = styled.button`
  display: flex;
  align-items: center; // 수직 중앙 정렬
  margin-left: 16px;
`;
