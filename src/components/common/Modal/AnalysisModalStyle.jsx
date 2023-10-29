import styled from "styled-components";

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 8px;
    height: 8px;
    background: none;
    border: 2.05px;
    padding: 0;
    outline: none;
    cursor: pointer;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const ModalWrapper = styled.div`
    width: 350px;
    height: 620px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.10);
    position: relative;
`;

export const P = styled.p`
    color: #000;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.5px;
    padding: 11px 0 0 34px;
`;

export const PrimaryText = styled.div`
    color: #828282;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    margin: 39px 0 0 34px;
`;

export const SecondaryText = styled.div`
     padding: 24px 0 34px 34px;
  
`;

export const ChartWrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #D9D9D9;
`;

export const Chart = styled.img`
    width: 80%;
    height: 80%;
`;

export const Description = styled.div`
    width: 322px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 47px;
    line-height: normal;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); 
`;