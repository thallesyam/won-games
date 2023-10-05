'use client'

import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${(props) => props.theme.colors.mainBg};
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
