import styled from 'styled-components';
import { ProfileState, ProfileAction} from './types';

interface Props {
  title: string;
  state: ProfileState;
  dispatch: React.Dispatch<ProfileAction>;
}

export default function ProfileDetail({ title }: Props) {
  return <div>{title}</div>;
}
