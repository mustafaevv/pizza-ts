import React from "react";
import styled from "styled-components";

import { CartITem } from "../Main";

interface CardProps {
  item: CartITem;
}

const Block = styled.div`
  width: 280px;
  margin-bottom: 50px;
`;

const BlockImage = styled.img`
  width: 100%;
`;

const BlockName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin: 15px 0;
`;

const BlockMain = styled.div`
  width: 100%;
  max-height: 86px;
  height: 100%;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 3px;
`;

const BlockTypesAndSize = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2px 0;
  height: 100%;
`;

const BlockTypesAndSizeBtn = styled.button`
  width: 95%;
  background: #fff;
  border-radius: 5px;
  height: 100%;
  border: none;
  background: #fff;
  padding: 5px 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  margin: 0 2px;
`;

const BlockBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const BlockPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
const BlockBtn = styled.p`
  width: 135px;
  line-height: 40px;
  background: #fe5f1e;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
`;

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Block>
      <BlockImage src={item.image} alt="" />
      <BlockName>{item.name}</BlockName>
      <BlockMain>
        <BlockTypesAndSize>
          {item.types.map((type) => (
            <BlockTypesAndSizeBtn key={type}>{type}</BlockTypesAndSizeBtn>
          ))}
        </BlockTypesAndSize>
        <BlockTypesAndSize>
          {item.sizes.map((size) => (
            <BlockTypesAndSizeBtn key={size}>{size} см</BlockTypesAndSizeBtn>
          ))}
        </BlockTypesAndSize>
      </BlockMain>
      <BlockBottom>
        <BlockPrice>от {item.price} ₽</BlockPrice>
        <BlockBtn>+ Добавить</BlockBtn>
      </BlockBottom>
    </Block>
  );
};

export default Card;
