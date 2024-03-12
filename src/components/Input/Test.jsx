import React from 'react';
import Input from './Input';
import styled from 'styled-components';
import { useState } from 'react';
import { getAllRecipients } from '../../apiFetcher/recipients/getAllRecipients';
import { useEffect } from 'react';
import { postRecipient } from '../../apiFetcher/recipients/postRecipient';

const Test = () => {
  const [formData, setFormData] = useState({
    team: '',
    name: '',
    backgroundColor: '',
  });

  const [recipients, setRecipients] = useState([]); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17

  // useEffect(() => {
  //   const response = getAllRecipients().then((res) => {
  //     console.log(res.data);
  //     setRecipients(res.data.results);
  //   });
  // }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const response = postRecipient(formData).then(res => {
      console.log(res.data);
      return res.data;
    });
  };

  const handleOnClick = () => {
    const response = getAllRecipients().then(res => {
      console.log(res.data);
      setRecipients(res.data.results);
      return res.data;
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
            id="name"
            name="name"
            value={formData.name}
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
        <button type="submit">등록</button>
      </form>
      {/* <Input error={false} disabled={false} />
      <Input error={true} disabled={false} />
      <Input error={false} disabled={true} /> */}
      <button onClick={handleOnClick}>조회하기</button>
      {recipients.map(recipient => {
        return (
          <div key={recipient.id}>
            <p>{recipient.id}</p>
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
