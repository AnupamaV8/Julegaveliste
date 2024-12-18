import styledelements, { keyframes } from "styled-components";
import styled from "styled-components";
import green from "./assets/green.jpg";
const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  word-wrap: break-word;
  font-size: 20px;
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
  font-size: 1.2rem;
  /* text-shadow: 0 0 5px #ff5100, 0 0 10px #fff, 0 0 15px #ff5100,
    0 0 30px #ff5100; */
  animation: ${sparkle} 1.5s ease-in-out infinite;
  word-wrap: break-word;
`;
const Details = styled.h2`
  color: orange;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  align-items: first baseline;
  font-size: 35px;
`;
const A = styled.p`
  color: yellow;
  font-size: 25px;
`;
const Cardinfo = styled.div`
  padding: 10px;
  margin: 10px;
  gap: 10px;
  color: #faf9f9;
  border: 1px solid #f8ef3d;
  border-radius: 8px;
  background-image: url("${green}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 0.25fr) 0.5fr 2fr;
  max-width: 100%;
  overflow: hidden;
`;

export default function WishlistCard({
  data: { id, name, age, wishlist, naughty },
}) {
  return (
    <>
      <Cardinfo>
        <h3>{id}</h3>
        <Details>{name}</Details>
        <p>{naughty ? "" : <AnimatedStar>✨SnilleBarn</AnimatedStar>}</p>
        <A>Alder:{age}</A>

        <List>
          ØnskeList:
          {wishlist.map((wish) => (
            <li>🎁{wish}</li>
          ))}
        </List>
      </Cardinfo>
    </>
  );
}
