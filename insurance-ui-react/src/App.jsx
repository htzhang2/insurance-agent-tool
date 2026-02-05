import { useState } from "react";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Calculator from "./pages/Calculator";
import AgentInfo from "./pages/AgentInfo";
import Plans from "./pages/Plans";

export default function App() {
  const [activePage, setActivePage] = useState("calculator");
  
  const gotoAgentInfo= () => {
    setActivePage("agent")
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <TopNav activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 max-w-xl mx-auto p-6 w-full">
        {activePage === "calculator" && <Calculator gotoAgentPage={gotoAgentInfo}/>}
        {activePage === "agent" && <AgentInfo />}
        {activePage === "plans" && <Plans />}
      </main>

      <Footer />
    </div>
  );
}
