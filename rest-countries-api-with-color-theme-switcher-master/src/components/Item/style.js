import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.elements};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  cursor: pointer;
`

export const Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

export const Info = styled.div`
  width: 100%;
  padding: 24px 24px 48px 24px;
`

export const Name = styled.p`
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
`

export const Text = styled.p`
  font-weight: ${(props) => props.fw};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  line-height: 16px;
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`
