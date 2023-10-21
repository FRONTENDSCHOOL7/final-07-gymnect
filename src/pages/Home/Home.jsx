import React from 'react'
import styled from 'styled-components';

export default function Home() {
  return (
    <BasicLayout>
    </BasicLayout>
  )
};

const BasicLayout = styled.div`
  position: relative;
  max-width: 390px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
`;