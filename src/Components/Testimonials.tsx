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
    <div className="flex flex-wrap border-2 border-black">
      {data.map((data: any) => (
        <h3
          key={data.id}
          className="max-w-xs rounded-lg bg-white p-1 text-center"
        >
          {data.message}
        </h3>
      ))}
    </div>
  );
};

export default Testimonials;
