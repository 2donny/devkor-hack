import styled from 'styled-components';

interface Props {
  title: string;
}

export default function ProfileDetail({ title }: Props) {
  return <div>{title}</div>;
}
