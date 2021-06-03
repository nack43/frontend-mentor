import styled from 'styled-components'

export const Items = styled.div`
  display: grid;
  grid-row-gap: 75px;
  grid-column-gap: 75px;
  grid-template-columns: repeat(auto-fill, 264px);
  width: 100%;

  @media (max-width: 375px) {
    gap: 40px;
    place-content: center;
  }
`

export const Contents = styled.div`
  width: 100vw;
  padding: 48px 80px;
  background: ${({ theme }) => theme.background};

  @media (max-width: 375px) {
    padding: 24px 16px;
  }
`

export const SearchHeader = styled.div`
  min-height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 375px) {
    gap: 40px;
  }
`

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.text};
`
