import styled from "styled-components";
import whiteLogoIcon from "../../../assets/images/하얀아령.svg";
import logoIcon from "../../../assets/images/아령.svg";

export const HealthWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px 10px 8px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  &:hover {
    background-color: #006cd8;
    transition: 0.3s;
    * {
      color: white;
    }
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  &:after {
    content: "";
    position: relative;
    top: 20.5px;
    width: 4px;
    height: 4px;
    background-color: #b7b7b7;
    border-radius: 50%;
  }
  ${HealthWrap}:hover &:after {
    background-color: #ffffff;
  }
`;

export const Logo = styled.div`
  width: 23.63px;
  height: 23px;
  background-image: url(${logoIcon});
  background-size: cover;

  ${HealthWrap}:hover & {
    background-image: url(${whiteLogoIcon});
  }
`;

export const Wrap = styled.p`
  display: flex;
  justify-content: space-between;
  width: 272px;
  font-family: "SBAggroB";
  color: #505050;
  margin-left: 9.3px;
  border-bottom: 0.5px solid #b7b7b7;
  ${HealthWrap}:hover & {
    border-bottom: 0.5px solid #ffffff;
  }
`;

export const HealthKind = styled.p`
  font-size: 16px;
  text-align: left;
`;

export const Time = styled.p`
  margin-top: 2px;
`;

export const HealthCntWrap = styled.div`
  margin-top: 8.2px;
  margin-right: 7px;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
`;

export const DataWrap = styled.p`
  font-family: "Nanum Gothic";
  color: #a6a6a6;
  margin-bottom: 5px;
`;

export const DataKg = styled.span`
  display: inline-block;
  text-align: right;
  width: 50px;
`;

export const DataCnt = styled.span`
  display: inline-block;
  text-align: right;
  margin-left: 36px;
  width: 35px;
`;

export const HealthCnt = styled.div`
  margin-top: 8.2px;
  font-family: "Nanum Gothic";
  color: #a6a6a6;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
`;
