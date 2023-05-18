import styled from "styled-components";

const Title = styled.h1`
font-size : 20px;
color:${({ theme }) => theme.colors.primary}`

function cssJs() {
  return (
    <>
      {/* Inline css */}
      <h2 style={{ color: 'red' }}>Inline CSS</h2>
      {/* styledComponents: true add in next.config.js for access it */}
      <Title>Styled Component</Title>
    </>
  )
}
export default cssJs