import Wishlistcard from "./WishlistCard";
import styled from "styled-components";
import green from "./assets/green.jpg";

// import "./App.css";

const Main = styled.main`
  padding: 10px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 3rem;
  padding: 0px;
  color: #0a6218;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const Wrapper = styled.section`
  padding: 0.1px;
  background: #ede213;
`;

const Grid = styled.div`
  display: grid;
  margin: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);

  border-radius: 10px;
  gap: 20px;
  /* @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  } */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const Cardinfo = styled.div`
  padding: 10px;
  /* padding-top: 55px; */
  margin: 20px;
  color: #faf9f9;
  border: 1px solid #f8ef3d;
  border-radius: 8px;
  background-image: url("${green}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
`;

function App() {
  const kidsWishlist = [
    {
      id: 1,
      name: "Emilie",
      age: 8,
      wishlist: [
        "Dukkehus",
        "Enhjørningbamse",
        "Fargeleggingsbok",
        "Hoppeball",
      ],
      naughty: false,
    },
    {
      id: 2,
      name: "Jakob",
      age: 10,
      wishlist: ["Fjernstyrt bil", "Lego-sett", "Videospill"],
      naughty: true,
    },
    {
      id: 3,
      name: "Sofie",
      age: 6,
      wishlist: ["Tryllestav", "Fe-kostyme", "Glitterpenner", "Dansesko"],
      naughty: false,
    },
    {
      id: 4,
      name: "Lars",
      age: 9,
      wishlist: [
        "Basketball",
        "Drone",
        "Tegneseriebøker",
        "Kikkert",
        "Byggesett",
      ],
      naughty: false,
    },
    {
      id: 5,
      name: "Mia",
      age: 7,
      wishlist: ["Puslespill", "Kunstutstyr", "Prinsessekjole"],
      naughty: true,
    },
    {
      id: 6,
      name: "Noa",
      age: 11,
      wishlist: ["Skateboard", "Vitenskapssett", "Brettspill", "Fotball"],
      naughty: true,
    },
    {
      id: 7,
      name: "Oda",
      age: 5,
      wishlist: [
        "Lekekjøkken",
        "Kosedyr",
        "Boblemaskin",
        "Tesett",
        "Leketallerkener",
      ],
      naughty: false,
    },
    {
      id: 8,
      name: "Adrian",
      age: 8,
      wishlist: ["Fotball", "Actionfigurer", "Togbane"],
      naughty: false,
    },
    {
      id: 9,
      name: "Anna",
      age: 6,
      wishlist: [
        "Tesett",
        "Dukketeater",
        "Glitterklistremerker",
        "Prinsessekrone",
      ],
      naughty: false,
    },
    {
      id: 10,
      name: "Elias",
      age: 9,
      wishlist: ["Elektrisk sparkesykkel", "Rubiks kube", "Tegneserieromaner"],
      naughty: true,
    },
    {
      id: 11,
      name: "Ella",
      age: 7,
      wishlist: [
        "Prinsesseslott",
        "Kostymer",
        "Lekekjøkken",
        "Perlesett",
        "Interaktiv bok",
      ],
      naughty: false,
    },
    {
      id: 12,
      name: "Lukas",
      age: 8,
      wishlist: [
        "Drone",
        "Fjernstyrt båt",
        "Lego-romskip",
        "Skissebok",
        "LED-nattlampe",
      ],
      naughty: true,
    },
    {
      id: 13,
      name: "Charlotte",
      age: 6,
      wishlist: ["Kosehund", "Kunstsett", "Glow-stick-armbånd", "Mini-piano"],
      naughty: false,
    },
    {
      id: 14,
      name: "Marius",
      age: 9,
      wishlist: [
        "Basketballkurv",
        "Robotbyggesett",
        "Fotballsko",
        "Actionkamera",
        "Fjernstyrt lastebil",
      ],
      naughty: false,
    },
    {
      id: 15,
      name: "Aria",
      age: 5,
      wishlist: ["Fevinger", "Glitterlim", "Tryllestav", "Tesett", "Leketlf"],
      naughty: false,
    },
    {
      id: 16,
      name: "Benjamin",
      age: 10,
      wishlist: [
        "Fjernstyrt helikopter",
        "Eksperimentsett",
        "VR-briller",
        "Tursekk",
      ],
      naughty: true,
    },
    {
      id: 17,
      name: "Isabella",
      age: 6,
      wishlist: [
        "Havfruedukke",
        "Kunststativ",
        "Malesett",
        "Enhjørningsekk",
        "Ballettsko",
      ],
      naughty: true,
    },
    {
      id: 18,
      name: "Henrik",
      age: 11,
      wishlist: [
        "Spillkonsoll",
        "Skateboard",
        "Elektrisk gitar",
        "Støydempende hodetelefoner",
        "Tegneseriebokserie",
        "Bygg-din-egen-drone-sett",
      ],
      naughty: true,
    },
    {
      id: 19,
      name: "Liva",
      age: 5,
      wishlist: ["Boblemaskin", "Leketamera", "Modell-leire", "Koseenhjørning"],
      naughty: false,
    },
    {
      id: 20,
      name: "Sander",
      age: 9,
      wishlist: [
        "Sportsdrakt",
        "Basketball",
        "Fjernstyrt bil",
        "Bygg-din-egen katapult-sett",
        "Walkie-talkier",
      ],
      naughty: false,
    },
  ];

  return (
    <Main>
      <Wrapper>
        <Title>JULEØNSKELISTE </Title>
      </Wrapper>
      <Grid>
        {kidsWishlist.map(({ id, name, age, wishlist, naughty }) => {
          return (
            <Cardinfo>
              <Wishlistcard
                id={id}
                name={name}
                age={age}
                wishlist={wishlist}
                naughty={naughty}
              />
            </Cardinfo>
          );

          //anther typpe  {productInfo.map((product) => {
          //return <ProductCard data = {product} />;
        })}
      </Grid>
    </Main>
  );
}

export default App;
