import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { URL } from '../../../api/axiosInstance';
import { userInfoAtom } from '../../../atoms/UserAtom';


const FollowerListAPI = (accountName) => {
  const token = useRecoilValue(userInfoAtom);

  const fetchFollower = useCallback(async () => {
    try {
      const response = await fetch(`${URL}/profile/${accountName}/follower`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API 응답에 실패하였습니다.', error);
    }
  }, [accountName, token]);

  return { fetchFollower };
};

export default FollowerListAPI;
