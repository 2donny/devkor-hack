import { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { ProfileLocationState } from './types.d';
import axiosInstance from '../Client';
import { LoginResponse } from '../profile/types';

interface Props {}

export default function KakaoRedirect(props: Props) {
  const location = useLocation<ProfileLocationState>();
  const history = useHistory();

  useEffect(() => {
    const { userId, gender, nickname, profile_image_url } = location.state;

    console.log(userId);

    axiosInstance
      .post<LoginResponse>('/user/login', {
        userId,
      })
      .then((res) => {
        console.log(res);
        if (res.data.ok) {
          // redirect to /call/waiting
          history.push('/call/waiting', {
            userId,
            nickname,
            gender,
            profile_image_url,
          });
        } else {
          history.push('/me', {
            userId,
            nickname,
            gender,
            profile_image_url,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  return null;
}
