import React, { useState } from 'react'
import Alert from '../Alert/Alert';
import { Background, Section, Container } from './PostModalStyle';

export default function Modal({ setIsModalOpen, children }) {
    const [tempFunc, setTempFunc] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
  
    const handleClick = () => {
      setIsModalOpen(false);
    };
    const childrenWithProps = React.Children.map(children, (child) =>
      React.cloneElement(child, { setShowAlert, setTempFunc, setMessage })
    );
  
    function getAlertMessage(message) {
      if (message === '설정 및 개인정보') {
        return '프로필을 변경할까요?';
      } else if (message === '삭제' || message === '수정') {
        return `게시글을 ${message}할까요?`;
      } else if (message === '댓글 삭제') {
        return `댓글을 ${message.split(" ")[1]}할까요?`; // "댓글 삭제"에서 "삭제"만 추출하여 사용
      } else {
        return `${message}하시겠어요?`;
      }
    }
  
    return (
      <>
        <Background onClick={handleClick} />
        <Section>
          <Container showAlert={showAlert}>{childrenWithProps}</Container>
        </Section>
        {showAlert && (
          <Alert
            message={getAlertMessage(message)}
            Func={tempFunc}
            cancel={setShowAlert}
          />
        )}
      </>
    );
  }