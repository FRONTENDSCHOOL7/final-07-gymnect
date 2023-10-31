import React, { useState } from "react";
import iconDot from "../assets/images/icon-dot.svg";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import DeleteCommentModal from "../components/common/Modal/DeleteCommentModal";
import ReportModal from "../components/common/Modal/ReportModal";
import { userInfoAtom } from "../atoms/UserAtom";
import {
  Container,
  Image,
  CommentSection,
  Contents,
  UserInfo,
  UserName,
  Comment,
  Button
} from "./FeedCommentStyle";

export default function FeedComment({ data, setCommentId }) {
  const userInfo = useRecoilValue(userInfoAtom);
  const { author, createdAt, content } = data;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  // 내 아이디면 삭제, 다른 사람 아이디면 신고
  const handleClickMoreButton = () => {
    setCommentId(data.id);
    if (userInfo._id === author._id) {
      setIsDeleteModalOpen(true);
    } else {
      setIsReportModalOpen(true);
    }
  };

  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);
  const handleCloseReportModal = () => setIsReportModalOpen(false);

  return (
    <>
      <Container>
        <CommentSection>
          <Link to={`/profile/${userInfo.accountname}`}>
            <Image src={userInfo.profileImg} alt="유저 프로필 이미지" />
          </Link>
          <Contents>
            <UserInfo>
              <UserName>{userInfo.username}</UserName>
            </UserInfo>
            <Comment>{content}</Comment>
          </Contents>
        </CommentSection>
        <Button onClick={handleClickMoreButton}>
          <img src={iconDot} alt="삭제" />
        </Button>
      </Container>

      {isDeleteModalOpen && (
        <DeleteCommentModal onClose={handleCloseDeleteModal} />
      )}
      {isReportModalOpen && <ReportModal onClose={handleCloseReportModal} />}
    </>
  );
}
