export type ProfileAction =
  | { type: 'setName' }
  | { type: 'setUniv'; results: HNResponse }
  | { type: 'setAge'; error: string }
  | { type: 'setMbti'; error: string }
  | { type: 'setLocation'; error: string }
  | { type: 'setGender'; error: string }
  | { type: 'setIntro'; error: string }
  | { type: 'setJob'; error: string }
  | { type: 'setBucketList'; error: string }
  | { type: 'setTalkingSubject'; error: string }
  | { type: 'setBio'; error: string };

export type ProfileState = {
  name: '';
  univ: '';
  age: '';
  mbti: '';
  location: '';
  gender: '';
  intro: '';
  job: '';
  bucketList: '';
  talkingSubject: '';
  bio: '';
};
