import styled from "styled-components";

export const LoginSignupStyle = styled.div`
  display: flex;
  justify-content: center;
  .btns {
    display: flex;
    justify-content: center;
  }
  .formbody {    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  /* Forms */
  form {
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: inline-block;
    max-width: 400px;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }

  input[type="text"],
  input[type="password"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin: 5px 0 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    border-color: #007bff;
    outline: none;
  }

  button[type="submit"] {
    background-color: #28a745;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button[type="submit"]:hover {
    background-color: #218838;
  }

  /* Profile Page */
  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #666;
  }
`;
