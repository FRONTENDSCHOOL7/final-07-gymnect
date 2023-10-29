import React, { useState } from 'react';
import { Overlay, ModalWrapper, CloseButton, P, PrimaryText, SecondaryText, ChartWrapper, Chart, Description } from './AnalysisModalStyle';
import { ReactComponent as IconExit } from '../../../assets/images/icon-exit.svg';



export default function AnalysisModal() {
    const [isOpen, setIsOpen] = useState(true);

    return isOpen ? (
        <Overlay>
            <ModalWrapper>
            <CloseButton onClick={() => setIsOpen(false)}>
                <IconExit />
            </CloseButton>
            <PrimaryText>PRIMARY TEXT</PrimaryText>
            <P>5.987,34</P>
            <SecondaryText>Secondary text</SecondaryText>
            <ChartWrapper>
                <Chart src="path_to_chart_image.png" alt="Chart" />
            </ChartWrapper>
            <Description>
            000 님의 이번 주 총 운동시간은 00시 00분 입니다!<br/>다음 주도 열심히 운동하실거죠?
            </Description>
            </ModalWrapper>
        </Overlay>
    ) : null;
}
