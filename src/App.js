import { useState } from "react";
import Profile from "./Components/Profile";

function App() {
  const [page, setPage] = useState(true);
  const [info, setInfo] = useState("");

  const handlePage = () => {
    setPage((prev) => !prev);
  };

  return (
    <div>
      {<Profile handlePage={handlePage} /> }
    </div>
  );
}
export default App;
