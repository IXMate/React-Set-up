import AboutMe from "./components/AboutMe";

export default function App() {


  return (
    <section className="bg-amber-50 ">
    <div className="flex flex-col gap-5 justify-center items-center max-w-[1280px] ">
    <h1 className="bg-amber-200 w-[250px] mx-auto"> React App Starter</h1>
    <div>
    <p className="text-xl bg-green-100 w-[250px] mx-auto">Tech Stack</p>
    <ul className="bg-amber-200 w-[250px] mx-auto">
        <li> vite</li>
        <li> React</li>
        <li> JavaScript</li>
        <li> vite</li>
      </ul>
      <div className="bg-green-100 "> <AboutMe /> </div>
    </div>
    </div>
    </section>
  )
}


