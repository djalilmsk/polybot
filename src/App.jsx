import { Button } from "@/components/ui/button";
import Header from "./components/header/Header";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="relative flex flex-col mx-auto items-center min-h-screen p-10 pt-0 xl:w-6xl">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
