import styled from "styled-components";
import AddImg from "../images/img-btn.png";

// export const Container = styled.div`
//   margin: 0 auto;

//   .spriteImg-wrapper {
//     position: absolute;
//     bottom: 0;
//   }

//   .upload-button {
//     position: absolute;
//     left: 0;
//   }
// `;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; 
`;

export const ImageSection = styled.section`
`;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: 3.5rem auto 5.5rem;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #D9D9D9;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6em;
    height: 3.6rem;
    background: url(${AddImg}) no-repeat center / 3.6rem 3.6rem;
    z-index: 2;
    }
`

export const Image = styled.img`
//이미지 크기 수정필요 일단 피그마 크기로 설정
  /* width: 100%;
  height: 100%; */
  width: 122px;
  height: 110px;
  object-fit: contain;
  border-radius: 50%;
`;

export const ImageInput = styled.input`
  width: 0.1rem;
  height: 0.1rem;
  position: absolute;
  z-index: -1000rem;
`;

export const input = styled.input`
    width: 322px;
    height: 48px;
`;