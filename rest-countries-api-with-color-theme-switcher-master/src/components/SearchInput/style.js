import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 480px;
  width: 480px;
  height: 56px;
  background: ${({ theme }) => theme.elements};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  padding: 19px 32px;
`

export const Input = styled.input`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.text};
  margin-left: 24px;
  font-size: 14px;
  line-height: 20px;
  background: ${({ theme }) => theme.elements};
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`
