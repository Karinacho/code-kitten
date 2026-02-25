import styled from 'styled-components';

export const CircularProgressBarContainer = styled.div<{width: number, height: number}>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`