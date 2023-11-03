import React from "react";
import styled from "styled-components";

export default function HealthData({ kind, data }) {
  if (kind === "근력 운동") {
    return (
      <>
        {data.split(";").map((item1, idx1) => {
          const arr2 = item1.split("-");
          return (
            <HealthWrap key={`item1-${idx1}`}>
              <HealthKind>{arr2[0]}</HealthKind>
              {arr2.slice(1).map((item2, idx2) => {
                return (
                  <HealthCntWrap key={`group-${idx1}-${idx2}`}>
                    {item2.split(",").map((item3, idx3) => (
                      <HealthCnt key={`item3-${idx1}-${idx2}-${idx3}`}>
                        {item3}
                      </HealthCnt>
                    ))}
                  </HealthCntWrap>
                );
              })}
            </HealthWrap>
          );
        })}
      </>
    );
  } else if (
    kind === "걷기" ||
    kind === "달리기" ||
    kind === "등산" ||
    kind === "자전거 타기"
  ) {
    return (
      <>
        <HealthWrap>
          <HealthKind>{kind}</HealthKind>
          <HealthCnt>{data}</HealthCnt>
        </HealthWrap>
      </>
    );
  } else {
    return (
      <>
        <HealthKind>{kind}</HealthKind>
      </>
    );
  }
}

export const HealthWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HealthKind = styled.div`
  font-size: 18px;
  text-align: left;
`;

export const HealthCntWrap = styled.div``;

export const HealthCnt = styled.div`
  text-align: right;
`;
