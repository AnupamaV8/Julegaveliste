import styledelements, { keyframes } from "styled-components";
import styled from "styled-components";
const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
const p = styled.p`
  text-decoration: underline;
  font-family: "Times New Roman", Times, serif;
`;

const sparkle = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const AnimatedStar = styled.span`
  display: inline-block;
  font-size: 2rem;

  animation: ${sparkle} 1.5s ease-in-out infinite;
`;

export default function Card({ id, name, age, wishlist, naughty }) {
  return (
    <>
      <h3>{id}</h3>
      <h2>Navn:{name}</h2>
      <p>Alder:{age}</p>

      <List>
        ØnskeList:
        {wishlist.map((wish) => (
          <li>{wish}</li>
        ))}
      </List>

      <p>{naughty ? "" : <AnimatedStar>✨snilleBarn</AnimatedStar>}</p>
    </>
  );
}
