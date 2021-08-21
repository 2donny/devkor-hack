export type ProfileAction =
  | { type: 'setUserId'; payload: number }
  | { type: 'setProfileFormData'; payload: File }
  | { type: 'setProfileImg'; payload: string }
  | { type: 'setName'; payload: string }
  | { type: 'setUniv'; payload: string }
  | { type: 'setAge'; payload: string }
  | { type: 'setMbti'; payload: string }
  | { type: 'setLocation'; payload: string }
  | { type: 'setGender'; payload: string }
  | { type: 'setIntro'; payload: string }
  | { type: 'setJob'; payload: string }
  | { type: 'setBucketList'; payload: string }
  | { type: 'setTalkingSubject'; payload: string }
  | { type: 'setBio'; payload: string };

export interface ProfileState {
  userId?: number;
  profileFormData?: File;
  profileImg: string;
  name: string;
  univ: string;
  age: string;
  mbti: string;
  location: string;
  gender: string;
  intro: string;
  job: string;
  bucketList: string;
  talkingSubject: string;
  bio: string;
}

export interface JoinResponse extends CoreOutput {}
export interface LoginResponse extends CoreOutput {}

interface CoreOutput {
  ok: boolean;
  error?: string;
}
