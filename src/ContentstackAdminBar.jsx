import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Bar = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  left: 16px;
  position: fixed;
  z-index: 3;

  &:hover {
    transform: translateY(0);
  }
`;

const EditLink = styled.span`
  align-items: center;
  background-color: #fff;
  border-radius: 6px 6px 0 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  color: #111;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  margin-left: 6px;
  padding: 8px 16px 8px 14px;
  text-decoration: none;

  &:hover {
    background-color: #fafafa;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${({ keysVisible }) => {
      var style = document.createElement("style");
      style.innerHTML = `
        body{color:pink}
        [data-key] {
          position: relative;
        }
        [data-key] [data-key]::before {
          background: red;
        }
        [data-key] [data-key] [data-key]::before {
          background: blue;
        }
        [data-key] [data-key] [data-key] [data-key]::before {
          background: pink;
        }
        [data-key]::before {
          top: 0;
          left: 0;
          position: absolute;
          background: green;
          color: white;
          font-size: 12px;
          width: auto;
          height: auto;
          white-space: nowrap;
          z-index: 1;
        }
      `;
      document.querySelectorAll("[data-key]").forEach(
        myElement =>
          (style.innerHTML =
            style.innerHTML +
            `[data-key="${myElement.getAttribute("data-key")}"]::before {
            content: "${myElement.getAttribute("data-key")}";
          }`)
      );
      if (keysVisible) {
        return style.innerHTML;
      }
    }}`;

const ContentstackAdminBar = ({ editEntryUrl }) => {
  const [keysVisible, setKeysVisible] = useState(false);
  return (
    <>
      <GlobalStyle keysVisible={keysVisible} />
      <Bar>
        <EditLink as="a" href={editEntryUrl} target="_blank">
          Edit Entry
        </EditLink>
        <EditLink as="button" onClick={() => setKeysVisible(!keysVisible)}>
          {keysVisible ? "Hide" : "Show"} Keys
        </EditLink>
      </Bar>
    </>
  );
};

export default ContentstackAdminBar;
