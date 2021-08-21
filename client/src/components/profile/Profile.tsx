import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import ProfileLayout from './ProfileLayout';
import ProfileMain from './ProfileMain';
import ProfileDetail from './ProfileDetail';
import ProfileOption from './ProfileOption';
import { ProfileAction, ProfileState } from './types';

interface Props {}

function reducer(state: ProfileState, action: ProfileAction): ProfileState {
  switch (action.type) {
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

const initialState = {
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
};

export default function ProfileContainer(props: Props) {
  const [step, setStep] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = () => {
    if (step + 1 === components.length) {
      // http request, redirect
      console.log('axios');
    }
    setStep((step: number) => step + 1);
  };

  const prevStep = () => {
    if (step === 0) return;
    setStep((step: number) => step - 1);
  };

  const components = [
    <ProfileMain title="프로필 만들기" state={state} dispatch={dispatch} />,
    <ProfileDetail
      title="마지막! 어떤 사람인가요?"
      state={state}
      dispatch={dispatch}
    />,
    <ProfileOption title="선택사항" state={state} dispatch={dispatch} />,
  ];

  return (
    <ProfileLayout onNext={handleNext} onPrev={prevStep}>
      {components.map((component, index) => {
        if (step === index)
          return <React.Fragment key={index}>{component}</React.Fragment>;
        return null;
      })}
    </ProfileLayout>
  );
}
