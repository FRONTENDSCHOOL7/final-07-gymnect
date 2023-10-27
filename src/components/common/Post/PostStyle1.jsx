import styled from "styled-components";

export const PostArticle = styled.article`
  display: flex;
  flex-direction: column;
`;
export const PostFlexWrap = styled.div`
  display: flex;
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
  margin-left: 70px;
  padding-top: 15px;
  font-weight: bold;
  margin-right: 10px;
  & > span {
    display: inline-block;
    margin-left: 5px;
    font-weight: 400;
    width: 20px;
    text-align: center;
  }
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
  border-bottom: 1px solid #dbdbdb;
`;

export const HealthList = styled.li`
  font-weight: bold;
  & > span {
    display: inline-block;
    text-align: center;
    font-weight: 400;
  }
  & > span:first-child {
    width: 112px;
    margin-right: 25px;
  }
  & > span:nth-child(2) {
    width: 40px;
  }
  & > span:nth-child(3) {
    width: 30px;
    margin-left: 10px;
  }
  & > span:last-child {
    margin-left: 10px;
    width: 30px;
  }
`;

export const PostContent = styled.div`
  margin: 16px 0;
  font-size: 14px;
`;

export const PostUploadImg = styled.img`
  width: 328px;
  border-radius: 10px;
`;

export const HeartImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const MessageImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 16px;
  margin-right: 6px;
`;

export const PostDay = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
`;

export const ButtonWrap = styled.div`
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const HeartSpan = styled.span``;

export const MessageSpan = styled.span``;
