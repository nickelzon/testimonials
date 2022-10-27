import { useState, useEffect } from "react";

const Testimonials = () => {
  const url: string = "https://testimonialapi.toolcarton.com/api";
  const settings: any = {
    method: "GET",
    redirect: "follow",
  };

  const [data, setData]: any = useState([]);

  const getTestimonials = async () => {
    const result: any = await fetch(url, settings).then((res) => res.json());
    setData(result);
    console.log(result);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className={`flex max-w-4xl flex-col sm:grid sm:grid-cols-2 sm:gap-9`}>
      {data.map((element: any, index: number) => (
        <div
          key={element.id}
          className={`max-w-sm bg-white p-6 ${
            index !== data.length - 1 ? "mb-9 sm:mb-0" : "mb-0"
          } rounded-xl font-Jakarta`}
        >
          <div className="mb-6 flex items-center text-base font-bold">
            <img
              src={element.avatar}
              alt={element.id}
              className="mr-4 max-h-10 rounded-full"
            />
            {element.name}
          </div>
          <span className=" italic">"{element.message}"</span>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
