import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  min-width: 200px;
  height: 56px;
  background: ${({ theme }) => theme.elements};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;

  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.text};
  padding: 18px 24px;

  cursor: pointer;
`

export const FilterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-width: 200px;
  background: ${({ theme }) => theme.elements};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;

  color: ${({ theme }) => theme.text};
  padding: 16px 24px;
  position: absolute;
  top: 64px;

  p {
    margin-bottom: 8px;
  }

  p:last-child {
    margin-bottom: 0;
  }
`

export const FilterItem = styled.p`
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
