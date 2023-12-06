import styled from "styled-components";
import logoIcon from "../../../assets/images/아령.svg";

export const HealthWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px 10px 8px;
  border-radius: 10px;
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
`;

export const Logo = styled.div`
  width: 23.63px;
  height: 23px;
  background-image: url(${logoIcon});
  background-size: cover;
`;

export const HealthKind = styled.p`
  font-size: 16px;
  text-align: left;
  width: 272px;
  font-family: "SBAggroB";
  color: #505050;
  margin-left: 9.3px;
  border-bottom: 0.5px solid #b7b7b7;
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
