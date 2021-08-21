import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import ProfileLayout from './ProfileLayout';
import ProfileMain from './ProfileMain';
import ProfileDetail from './ProfileDetail';
import ProfileOption from './ProfileOption';
import { LoginResponse, ProfileAction, ProfileState } from './types';
import { useHistory, useLocation } from 'react-router-dom';
import { ProfileLocationState } from '../auth/types';
import axios from 'axios';
import { JoinResponse } from './types.d';

function reducer(state: ProfileState, action: ProfileAction): ProfileState {
  switch (action.type) {
    case 'setUserId':
      return {
        ...state,
        userId: action.payload,
      };
    case 'setProfileFormData':
      return {
        ...state,
        profileFormData: action.payload,
      };
    case 'setProfileImg':
      return {
        ...state,
        profileImg: action.payload,
      };
    case 'setName':
      return {
        ...state,
        name: action.payload,
      };
    case 'setUniv':
      return {
        ...state,
        univ: action.payload,
      };
    case 'setAge':
      return {
        ...state,
        age: action.payload,
      };
    case 'setMbti':
      return {
        ...state,
        mbti: action.payload,
      };
    case 'setLocation':
      return {
        ...state,
        location: action.payload,
      };
    case 'setGender':
      return {
        ...state,
        gender: action.payload,
      };
    case 'setIntro':
      return {
        ...state,
        intro: action.payload,
      };
    case 'setJob':
      return {
        ...state,
        job: action.payload,
      };
    case 'setBucketList':
      return {
        ...state,
        bucketList: action.payload,
      };
    case 'setTalkingSubject':
      return {
        ...state,
        talkingSubject: action.payload,
      };
    case 'setBio':
      return {
        ...state,
        bio: action.payload,
      };
    default:
      throw new Error();
  }
}

export default function Profile() {
  const location = useLocation<ProfileLocationState>();
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    userId: undefined,
    profileFormData: undefined,
    profileImg: '',
    name: '',
    univ: '',
    age: '',
    mbti: '',
    location: '',
    gender: '',
    intro: '',
    job: '',
    bucketList: '',
    talkingSubject: '',
    bio: '',
  });

  useEffect(() => {
    const { userId, gender, nickname, profile_image_url } = location.state;
    if (!userId) window.location.href = '/';
    dispatch({ type: 'setUserId', payload: userId });
    dispatch({ type: 'setGender', payload: gender || '' });
    dispatch({ type: 'setName', payload: nickname || '' });
    dispatch({ type: 'setProfileImg', payload: profile_image_url || '' });
  }, []);

  const handleNext = () => {
    if (step + 1 === components.length) {
      console.log('axios'); // http request, redirect
      setisLoading(true);
      const {
        userId,
        age,
        bio,
        bucketList,
        gender,
        intro,
        job,
        location,
        mbti,
        name,
        profileImg,
        talkingSubject,
        univ,
      } = state;

      axios
        .post<JoinResponse>('http://localhost:80/user/join', {
          userId,
          age,
          bio,
          bucketList,
          gender,
          intro,
          job,
          location,
          mbti,
          name,
          profileImg,
          talkingSubject,
          univ,
        })
        .then((res) => {
          console.log(res.data);
          setisLoading(false);
          if (res.data.ok) {
            history.push('/call');
          } else return alert(res.data.error);
        })
        .catch((err) => {
          console.log(err);
          return alert(err);
        });
    } else {
      setStep((step: number) => step + 1);
    }
  };

  const prevStep = () => {
    if (step === 0) history.push('/');
    setStep((step: number) => step - 1);
  };

  const components = [
    <ProfileMain
      onNext={handleNext}
      title="프로필 만들기"
      state={state}
      dispatch={dispatch}
    />,
    <ProfileDetail
      title="마지막! 어떤 사람인가요?"
      state={state}
      dispatch={dispatch}
    />,
    <ProfileOption title="선택사항" state={state} dispatch={dispatch} />,
  ];

  return (
    <ProfileLayout
      isSubmiting={isLoading}
      onNext={handleNext}
      onPrev={prevStep}
    >
      {components.map((component, index) => {
        if (step === index)
          return <React.Fragment key={index}>{component}</React.Fragment>;
        return null;
      })}
    </ProfileLayout>
  );
}
