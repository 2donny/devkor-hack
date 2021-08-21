import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileLayout from './ProfileLayout';
import ProfileMain from './ProfileMain';
import ProfileDetail from './ProfileDetail';
import ProfileOption from './ProfileOption';

interface Props {}

export default function ProfileContainer(props: Props) {
  const [step, setStep] = useState(0);

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
    <ProfileMain title="프로필 만들기" />,
    <ProfileDetail title="마지막! 어떤 사람인가요?" />,
    <ProfileOption title="선택사항" />,
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
