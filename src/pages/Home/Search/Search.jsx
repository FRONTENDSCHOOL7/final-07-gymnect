import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserSearch } from "../../../api/search";
import SearchNav from "../../../components/Header/SearchHeader";
import profileImage from "../../../assets/images/signup-profile.svg";
import LoadingLogo from "../../../assets/images/home-loading-logo.svg";
import {
  Container,
  Main,
  LogoSection,
  LogoImage,
  Text,
  Button,
  Image,
  Section,
  UserName,
  NickName
} from "./SearchStyle";

const Search = () => {
  const [query, setQuery] = useState(""); //검색입력창의 값을 저장
  const [searchResults, setSearchResults] = useState([]); //api호출결과롤 받아온 회원 검색결과 저장
  const navigate = useNavigate();

  /*검색어가 변경될 때마다 api를 호출하여 검색 결과를 가져옴*/
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        //검색어 있다면
        const fetchData = async () => {
          try {
            const results = await getUserSearch(query);
            setSearchResults(results);
          } catch (error) {
            console.error("Failed to fetch search results:", error);
          }
        };
        fetchData();
      } else {
        //검색어 없다면
        setSearchResults([]); //만약 검색어가 없으면 결과를 초기화함
      }
    }, 400); // 0.4초 지연
    return () => clearTimeout(delayDebounceFn); // 클린업 함수
  }, [query]);

  /*프로필 클릭*/
  const handleProfileClick = (index) => {
    if (searchResults && searchResults[index]) {
      //데이터가 존재하고 데이터의 이미지가 존재한다면
      navigate(`/profile/${searchResults[index].accountname}`, {
        state: { searchResults: searchResults[index] }
      });
    }
  };

  /*검색어와 일치하는 글자 다른색으로 강조됨*/
  const highlightTerm = (text, searchTerm) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(
      regex,
      (match) =>
        `<span style="color:#006CD8; font-weight: bold;">${match}</span>`
    );
  };
  /*이미지가 있으면 보여주고 없으면 기본이미지 보여줌*/
  const getImageSrc = (index) => {
    if (
      //만약 이미지가 존재하면서 특정 키워드를 포함하는 경우
      searchResults &&
      searchResults[index].image.includes("api.mandarin.weniv.co.kr") &&
      !searchResults[index].image.includes("undefined")
    ) {
      console.log("이미지가 존재합니다.");
      return searchResults[index].image;
    } else {
      console.log("!!이미지가 존재하지 않습니다.");
      return profileImage;
    }
  };

  return (
    <>
      <SearchNav value={query} onChange={(e) => setQuery(e.target.value)} />
      <Container>
        <Main>
          {searchResults.length === 0 ? (
            <LogoSection>
              <LogoImage src={LoadingLogo} />
              <Text>검색 결과가 없습니다.</Text>
            </LogoSection>
          ) : (
            searchResults.map((user, index) => (
              <Button
                key={user._id}
                onClick={() => {
                  handleProfileClick(index);
                }}>
                <Image //회원 이미지가 존재하지않으면 기본이미지
                  src={getImageSrc(index)}
                  alt="프로필 이미지"
                />
                <Section>
                  <UserName
                    dangerouslySetInnerHTML={{
                      __html: highlightTerm(user.username, query)
                    }}
                  />
                  <NickName>{"@" + user.accountname}</NickName>
                </Section>
              </Button>
            ))
          )}
        </Main>
      </Container>
    </>
  );
};
export default Search;
