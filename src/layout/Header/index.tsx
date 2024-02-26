import styled from "styled-components";

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
`;

const HeaderLogo = styled.a`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  text-decoration: none;

  & span {
    color: #7b7b7b;
    font-size: 16px;
    font-weight: 400;
    text-transform: lowercase;
  }
`;

const HeaderCartBtn = styled.a`
  background: #fe5f1e;
  max-width: 150px;
  width: 100%;
  line-height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 30px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderLogo href="">
        react pizza <span>самая вкусная пицца во вселенной</span>{" "}
      </HeaderLogo>
      <HeaderCartBtn href="">asdasd</HeaderCartBtn>
    </HeaderBlock>
  );
};

export default Header;
