import React, { useState } from "react";
import styled from "styled-components";
import Picture from "./Picture";

const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  text-align: center;
  filter: blur(0px) !important;
  background-color: white;
  border: 2px solid #d3d3d3;
  z-index: 1;
  box-shadow: 0px 0px 10px 0px lightgray;
`;

const StyledPicture = styled(Picture)`
  height: 250px;
  margin: 1rem;
  cursor: pointer;
`;

const IngredientName = styled.p`
  margin: 1rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #d3d3d3;
  padding: 0.5rem 1rem;
`;

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  font-weight: bold;

  :hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: 1px solid red;
  background-color: red;
  color: white;
  font-weight: bold;

  :hover {
    background-color: white;
    color: red;
    cursor: pointer;
  }
`;

const SaveButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: 1px solid green;
  background-color: green;
  color: white;
  font-weight: bold;

  :hover {
    background-color: white;
    color: green;
    cursor: pointer;
  }
`;

const IngredientModal = ({ data, isModalOpen, setIsModalOpen }) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [isImageSelectorOpen, setIsImageSelectorOpen] = useState(false);

  const openImageSelector = () => {
    console.log("open image selector");
  };

  const getSelectedImageUrl = () => {
    console.log("get selected image url");
  };

  const removeIngredient = () => {
    console.log("remove ingredient");
  };

  const saveIngredient = () => {
    console.log("save ingredient");
  };

  // const root = document.getElementById("root");

  // if (isModalOpen) {
  //   root.style.filter = "blur(5px)";
  // } else {
  //   root.style.filter = "blur(0px)";
  // }

  return (
    <Modal>
      <StyledPicture {...data} />
      <IngredientName>{data?.name}</IngredientName>
      <ButtonContainer>
        <CancelButton
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          Cancel
        </CancelButton>
        <DeleteButton
          onClick={() => {
            removeIngredient();
            setIsModalOpen(false);
          }}
        >
          Delete
        </DeleteButton>
        <SaveButton
          onClick={() => {
            saveIngredient();
            setIsModalOpen(false);
          }}
        >
          Save
        </SaveButton>
      </ButtonContainer>
    </Modal>
  );
};

export default IngredientModal;
