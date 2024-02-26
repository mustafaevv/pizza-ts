import AllRouter from "./routes/AllRouter";
import GlobalStyles from "./GlobalStyles";
import Container from "./layout/Container";

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <AllRouter />
    </Container>
  );
};

export default App;
