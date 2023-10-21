import BasicLayout from "./components/Layout/BasicLayout";
import AppRouter from "./routes/AppRouter";
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BasicLayout>
        <AppRouter />
      </BasicLayout>
     
    </div>
  );
}
export default App;