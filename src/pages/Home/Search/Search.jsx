import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchNav from "../../../components/Header/SearchHeader";
import styled from "styled-components";
import { getUserSearch } from "../../../api/search";
import profileImage from "../../../assets/images/signup-profile.svg";

const Search = () => {
  const [query, setQuery] = useState(""); //검색입력창의 값을 저장
  const [searchResults, setSearchResults] = useState([]); //api호출결과롤 받아온 회원 검색결과 저장
  const navigate = useNavigate();

  /*검색어가 변경될 때마다 api를 호출하여 검색 결과를 가져옴*/
  useEffect(() => {
    if (query) {
      console.log("검색어 있음");
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
      setSearchResults([]); //만약 검색어가 없으면 결과를 초기화함
      console.log("검색어 없음");
    }
  }, [query]);

  /*프로필 클릭*/
  const handleProfileClick = (index) => {
    if (searchResults && searchResults[index]) {
      //데이터가 존재한다면
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
      (match) => `<span style="color:#006CD8">${match}</span>`
    );
  };

  const getImageSrc = (index) => {
    if (searchResults && searchResults[index].image) {
      console.log("이미지가 존재합니다.");
      return searchResults[index].image;
    } else {
      console.log("!!이미지가 존재아지 않습니다.");
      return profileImage;
    }
  };
  return (
    <>
      <SearchNav value={query} onChange={(e) => setQuery(e.target.value)} />
      <Container>
        <Main>
          {searchResults.length === 0 ? (
            <Text>검색 결과가 없습니다.</Text>
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
                {/* <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightTerm(user.username, query)
                    }}
                  />
                </p>
                <p>아이디 : @{user.accountname}</p> */}
              </Button>
            ))
          )}
        </Main>
      </Container>
    </>
  );
};
export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  height: calc(100vh - 108px);
  overflow-y: scroll;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  &::-webkit-scrollbar {
    width: 7px; // 스크롤바 너비
  }
  &::-webkit-scrollbar-thumb {
    background: #bfbfbf; // 스크롤바 색상
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #888; // 여기에 원하는 hover 시의 색상을 지정하세요
  }
`;
const Main = styled.div`
  height: 100%;
  margin-top: 2rem;
  margin-left: 1.6rem;
  //background-color: #bed2f7;
`;
const Text = styled.p`
  font-size: 1.4rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const Image = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1.2rem;
  border-radius: 50%;
  /* width: 42px;
  height: 42px; */
  border: 1px solid #d9d9d9;
  background-color: #fff;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
// const HighlightedText = styled.span`
//   color: ${({ theme }) => theme.colors.mainColor};
//   font-weight: bold;
// `;
const UserName = styled.p`
  margin-bottom: 0.6rem;
  font-size: 14px;
`;
const NickName = styled.p`
  font-size: 10px;
  color: #767676;
`;
