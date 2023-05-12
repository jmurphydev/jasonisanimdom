import "./App.css";
import { requestAllPets } from "./requests";
import { useEffect, useState } from "react";
import styled from "styled-components";

const localPets = localStorage.getItem("pets");
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  margin: 1rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 20rem;

  img {
    width: 15rem;
    height: 15rem;
  }

  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }

  &.active {
    flex-grow: 4;
  }
`;

function App() {
  const [pets, setPets] = useState([]);
  console.log(pets);

  console.table(localPets);
  useEffect(() => {
    requestAllPets().then((result) => {
      setPets(result);
      localStorage.setItem("pets", JSON.stringify(pets));
    });
  }, []);

  return (
    <div className="App">
      <h1>Adopt a Pet</h1>
      <StyledContainer>
        {pets &&
          pets.map((pet) => {
            return (
              <ChildContainer key={pet.id} isHovered>
                <h2>{pet.name}</h2>
                <img src={pet.images[0]} alt={pet.name} />
              </ChildContainer>
            );
          })}
      </StyledContainer>
    </div>
  );
}

export default App;
