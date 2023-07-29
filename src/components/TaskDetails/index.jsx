import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

import "./styles.css";

function TaskDetails() {
  const params = useParams();
  const navigate = useNavigate();

  function handleBackButtonClick() {
    navigate(`/`);
  }
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          repellat ratione dolorem ut perferendis, obcaecati tenetur ab unde
          harum neque beatae, rem dolore, optio adipisci sint tempore ipsam est
          nihil.
        </p>
      </div>
    </>
  );
}

export default TaskDetails;
