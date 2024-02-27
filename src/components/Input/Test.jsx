import React from "react";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";
import { getAllRecipients } from "../../apiFetcher/recipients/getAllRecipients";

const Test = () => {
  const [formData, setFormData] = useState({
    team: "",
    userName: "",
    backgroundColor: "",
  });

  const [recipients, setRecipients] = useState([]); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleOnClick = () => {
    getAllRecipients().then((res) => {
      console.log("전체조회...");
      console.log(res.data);
      console.log(res.status);
      setRecipients(res.data);
    });
  };
  return (
    <S.InputContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="team">Team Name:</label>
          <input
            type="text"
            id="team"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>
      </form>
      {/* <Input error={false} disabled={false} />
      <Input error={true} disabled={false} />
      <Input error={false} disabled={true} /> */}
      <button onClick={handleOnClick}>조회하기</button>
      {recipients.map((recipient) => {
        return (
          <div key={recipient.id}>
            <p>{recipient.team}</p>
            <p>{recipient.name}</p>
            <p>{recipient.backgroundColor}</p>
          </div>
        );
      })}
    </S.InputContainer>
  );
};

export default Test;

const S = {
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
