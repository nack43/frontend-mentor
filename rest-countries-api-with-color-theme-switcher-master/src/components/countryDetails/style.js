import styled from 'styled-components'

export const Flag = styled.img`
  max-width: 560px;
  height: 401px;
  object-fit: cover;
`

export const Contents = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px 80px;
  background: ${({ theme }) => theme.background};
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
export const InfoRow = styled(Row)`
  justify-content: space-between;
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
