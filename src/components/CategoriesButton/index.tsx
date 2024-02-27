import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import links from "../../routes";
import React from "react";

type Props = {
  check: boolean;
};

const BtnGroup = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Btn = styled(Link)<Props>`
  color: ${({ check }) => (check ? "#fff" : "#000")};
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  background: ${({ check }) => (check ? "#000" : "#f9f9f9")};
  border-radius: 30px;
  padding: 10px 20px;
`;

const CategoriesButton = () => {
  const { pathname } = useLocation();
  return (
    <BtnGroup>
      {links.map(({ id, name, link }) => (
        <Btn check={link == pathname} to={link} key={id}>
          {name}
        </Btn>
      ))}
    </BtnGroup>
  );
};

export default CategoriesButton;
