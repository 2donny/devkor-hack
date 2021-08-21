import styled from 'styled-components';
import { CheckmarkOutline } from 'react-ionicons';

interface Props {
  label: string;
  checked: boolean | null;
  onClick: (label: string) => void;
}

export default function CheckBoxRow({ label, checked, onClick }: Props) {
  return (
    <Label onClick={() => onClick(label)} htmlFor={label}>
      <RowBody>
        <CheckCircle checked={checked}>
          <CheckmarkOutline color={'#00000'} height="25px" width="25px" />
        </CheckCircle>

        <LabelText>{label}</LabelText>
      </RowBody>
    </Label>
  );
}

const Label = styled.label`
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const RowBody = styled.span`
  display: flex;
`;

const CheckCircle = styled.div<{ checked: boolean | null }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0 10px 15px 30px;
  font-size: 18px;
  border-radius: 12px;
  border: 1px solid #25d482;
  color: ${(props) => (props.checked ? '#fff' : '#25d482')};
  background-color: ${(props) => props.checked && '#25d482'};
`;

const LabelText = styled.span`
  line-height: 24px;
  margin: 0 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
