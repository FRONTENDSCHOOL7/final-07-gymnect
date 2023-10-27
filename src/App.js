import BasicLayout from "./components/Layout/BasicLayout";
import AppRouter from "./routes/AppRouter";
import GlobalStyles from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";

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
