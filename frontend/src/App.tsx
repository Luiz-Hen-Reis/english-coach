import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

export default function App() {
  return (
    <div className="flex flex-col justify-between items-center h-full py-8 lg:max-w-[1024px] lg:m-auto">
      <Header />
      <main className="flex-1 w-full overflow-y-auto my-2">
        <Chat />
      </main>
      <Footer />
    </div>
  )
};