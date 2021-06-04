import styled from 'styled-components'

export const Container = styled.div`
  width: 108px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 84px;
    font-size: 12px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;

  @media (max-width: 375px) {
    width: 16px;
    height: 16px;
  }
`
