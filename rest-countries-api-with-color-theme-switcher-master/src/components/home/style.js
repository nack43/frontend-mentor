import styled from 'styled-components'

export const Items = styled.div`
  display: grid;
  grid-row-gap: 75px;
  grid-column-gap: 75px;
  grid-template-columns: repeat(auto-fill, 264px);
  width: 100%;
`

export const Contents = styled.div`
  width: 100vw;
  padding: 48px 80px;
  background: ${({ theme }) => theme.background};
`

export const SearchHeader = styled.div`
  min-height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
  gap: 8px;
`
