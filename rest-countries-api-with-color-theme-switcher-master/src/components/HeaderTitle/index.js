import styled from 'styled-components'

const HeaderTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;

  color: ${({ theme }) => theme.text};

  @media (max-width: 375px) {
    font-size: 14px;
  }
`

export default HeaderTitle
