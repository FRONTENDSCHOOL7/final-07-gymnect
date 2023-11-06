import GlobalStyles from "./styles/GlobalStyle";
import BasicLayout from "./components/Layout/BasicLayout";
import { RecoilRoot } from "recoil";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <GlobalStyles />
      <BasicLayout>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
      </BasicLayout>
    </>
  );
}
export default App;
