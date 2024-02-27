import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CategoriesButton from "../CategoriesButton";
import Card from "../Card";


export interface CartITem {
  id: number;
  name: string;
  image: string;
  types: string[];
  sizes: number[];
  price: number;
  category: string;
}

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin: 55px 0;
`;


const Main: React.FC = () => {
  const [data, setData] = useState<CartITem[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://659528f804335332df8215ee.mockapi.io/apis/pizza"
      );
      const data = await res.json();
      setData(data);
    };
    getData();
  }, [data]);

  return (
    <section>
      <CategoriesButton />
      <Title>Все пиццы</Title>
      <Content>
        {data && data.map((cart) => <Card key={cart.id} item={cart} />)}
      </Content>
    </section>
  );
};

export default Main;
