import Testimonials from "./Components/Testimonials";
import { url } from "./Components/Testimonials";

const App = () => {
  return (
    <div className="h-full w-full bg-slate-100">
      <div className="main-container flex flex-col items-center p-10">
        <h1
          className="rest mb-10 text-center font-Jakarta text-xs font-black"
          onClick={() => {
            location.href = url;
          }}
        >
          REST API: {url}
        </h1>
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
