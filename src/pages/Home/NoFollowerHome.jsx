import React from 'react'
import LoadingLogo from '../../assets/images/home-loading-logo.svg'
import HomeNav from '../../components/Header/HomeHeader'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/ButtonContainer';

const NoFollowerHome = () => {
  const Navigate = useNavigate();

  const navigateToSearch = () => {
    Navigate("/search");
  };

  return (
    <>
      <HomeNav />
      <Container>
        <Image src={LoadingLogo} />
        <Text>유저를 검색해 팔로우 해보세요!</Text>
        <Button width="120px" height="44px" type="button" onClick={navigateToSearch}>
          검색하기
        </Button>
      </Container>
    </>
  )
  }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: calc(100vh - 108px);
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #767676;
`
export const Image = styled.img`
  width: 97.61px;
  height: 95.112px;
`;

export default NoFollowerHome