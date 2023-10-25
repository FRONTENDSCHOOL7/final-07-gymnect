import styled from "styled-components";
import AddImg from "../../assets/images/icon-img-btn.svg";
import imgSrc from "../../assets/images/signup-profile.svg";

export const Container = styled.main`
  margin: 0 auto;
`;

export const Title = styled.h1`
  padding-top: 30px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const SubTitle = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  color: #767676;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;

export const Section = styled.div`
  padding-bottom: 30px;
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

// export const Label, Input, ImageInput = styled.

export const ImageSection = styled.section``;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  margin: 3.5rem auto 5.5rem;
  background: url(${imgSrc}) no-repeat center / 122px 110px;

  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6em;
    height: 3.6rem;
    background: url(${AddImg}) no-repeat center / 3.6rem 3.6rem;
    z-index: 2;
  }
`;

export const ImageInput = styled.input`
  width: 322px;
  height: 48px;
  position: absolute;
  z-index: -1000rem;
  display: none;
`;

// export const input = styled.input`
//     width: 322px;
//     height: 48px;
// `;
export const Image = styled.img`
  width: 122px;
  height: 110px;
  object-fit: contain;
  border-radius: 50%;
`;
