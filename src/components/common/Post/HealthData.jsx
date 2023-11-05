import React from "react";

import {
  HealthWrap,
  HeaderWrap,
  Logo,
  HealthKind,
  HealthCntWrap,
  HealthCnt,
  DataWrap,
  DataKg,
  DataCnt
} from "./HealthDataStyle";

export default function HealthData({ kind, data }) {
  if (kind === "근력 운동") {
    return (
      <>
        {data.split(";").map((item1, idx1) => {
          const arr2 = item1.split("-");
          return (
            <HealthWrap key={`item1-${idx1}`}>
              <HeaderWrap>
                <Logo />
                <HealthKind>{arr2[0]}</HealthKind>
              </HeaderWrap>
              {arr2.slice(1).map((item2, idx2) => {
                return (
                  <HealthCntWrap key={`group-${idx1}-${idx2}`}>
                    {item2.split(",").map((item3, idx3) => {
                      const arr = item3.split("x");
                      return (
                        <DataWrap>
                          <DataKg>{arr[0]} kg</DataKg>
                          <DataCnt>{arr[1]}회</DataCnt>
                        </DataWrap>
                      );
                    })}
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
          <HeaderWrap>
            <Logo />
            <HealthKind>{kind}</HealthKind>
          </HeaderWrap>
          <HealthCnt>{data}</HealthCnt>
        </HealthWrap>
      </>
    );
  } else {
    return (
      <>
        <HealthWrap>
          <HeaderWrap>
            <Logo />
            <HealthKind>{kind}</HealthKind>
          </HeaderWrap>
        </HealthWrap>
      </>
    );
  }
}
