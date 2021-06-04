import styled from 'styled-components'

export const Flag = styled.img`
  max-width: 560px;
  height: 401px;
  object-fit: cover;

  @media (max-width: 375px) {
    max-width: 320px;
    height: 229px;
  }
`

export const BetweenFlatAndDetails = styled.div`
  width: 80px;

  @media (max-width: 375px) {
    width: unset;
  }
`

export const Contents = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px 80px;
  background: ${({ theme }) => theme.background};

  @media (max-width: 375px) {
    padding: 48px 27px;
    display: flex;
    flex-direction: column;
    height: unset;
  }
`

export const Name = styled.p`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 23px;

  color: ${({ theme }) => theme.text};
`

export const RowContents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const DetailsColumn = styled(Column)`
  padding-top: 40px;
  justify-content: space-between;
  flex: 1;
`

export const InfoColumn = styled(Column)`
  gap: 12px;
`
export const Details = styled(Row)`
  justify-content: space-between;

  @media (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    gap: 32px;
  }
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: ${({ fw }) => fw || 300};
  color: ${({ theme }) => theme.text};
`

export const BorderCountries = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`

export const BorderCountry = styled.div`
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  display: grid;
  place-items: center;
  font-size: 14px;
  line-height: 19px;
  font-weight: 300;
  padding: 4px 27px;
`

export const BackButton = styled.div`
  width: 136px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ theme }) => theme.elements};
  border-radius: 6px;
  margin-bottom: 80px;

  @media (max-width: 375px) {
    width: 104px;
    min-height: 32px;
    margin-bottom: 64px;
  }
`
export const Space = styled.div`
  ${({ w }) => {
    if (w) return `width: ${w}px;`
  }}

  ${({ h }) => {
    if (h) return `height: ${h}px;`
  }}
`

export const TextWrapper = styled.div`
  min-width: 150px;
`

export const BorderCountriesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 16px;
    margin-top: 34px;
  }
`
