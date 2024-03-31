import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col justify-between items-center h-full py-8 lg:max-w-[1024px] lg:m-auto">
      <Header />
      <main>App</main>
      <Footer />
    </div>
  )
};