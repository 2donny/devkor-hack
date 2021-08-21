import styled from 'styled-components';

interface Props {
  title: string;
}

export default function ProfileOption({ title }: Props) {
  return <div> {title}</div>;
}
