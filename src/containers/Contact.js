import React, { useEffect, useState } from "react";
import { postData } from "../redux/actions/contactAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Contact = () => {
  const dispatch = useDispatch();
  const resetUser = useSelector((state) => state.contact);

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setUser(resetUser.user);
  }, [resetUser]);

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(user));
  };

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="amazon-store"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="name"
              autoComplete="off"
              value={user.name}
              onChange={getUserData}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={user.email}
              onChange={getUserData}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter you message"
              value={user.message}
              onChange={getUserData}
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
