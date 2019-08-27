import React from "react";
import styled from "styled-components";

const Bar = styled.a`
  align-items: center;
  background-color: #fff;
  border-radius: 6px 6px 0 0;
  bottom: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  left: 16px;
  padding: 8px 16px 14px 14px;
  position: fixed;
  text-decoration: none;
  transform: translateY(8px);
  transition: transform 120ms ease-out;
  z-index: 3;

  &:hover {
    transform: translateY(0);
  }
`;

const ContentstackLogo = styled.img`
  width: 32px;
`;

const EditLink = styled.span`
  color: #111;
  font-size: 16px;
  font-weight: 400;
  margin-left: 6px;
`;

const ContentstackAdminBar = ({ editEntryUrl }) => (
  <Bar href={editEntryUrl} target="_blank">
    <ContentstackLogo src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/mzqxvq4tnfrk3n5vva0e" />
    <EditLink>Edit Entry</EditLink>
  </Bar>
);

export default ContentstackAdminBar;
