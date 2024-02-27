import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { CartITem } from "../../components/Main";
import Card from "../../components/Card";
import CategoriesButton from "../../components/CategoriesButton";

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

const Category = () => {
  const [data, setData] = useState<CartITem[]>([]);
  const { type } = useParams();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://659528f804335332df8215ee.mockapi.io/apis/pizza?category=${type}`
      );
      const data = await res.json();
      setData(data);
    };
    getData();
  }, [type]);

  return (
    <>
      <CategoriesButton />
      <Title>Все пиццы</Title>
      <Content>
        {data && data.map((cart) => <Card key={cart.id} item={cart} />)}
      </Content>
    </>
  );
};

export default Category;
