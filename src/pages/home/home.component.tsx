import { useQuery } from "@tanstack/react-query";
// import Header from "../../components/header.jsx";
// import Table from "../../components/table.jsx";
import "./home.css";
import { useState } from "react";

interface WeatherData {
  date: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  description: string;
}

function HomeComponent() {
  const [city, setCity] = useState<string>("");

  const { data, isLoading, isFetching, refetch, error } = useQuery({
  
    queryKey: ["weather", city],
    queryFn: () =>
      fetch(`http://localhost:3000/${city}`).then((response) =>
        response.json()
      ),
    enabled: false,
    retry: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  // if (isLoading || isFetching) {
  //   return <h1>Loading...</h1>;
  // }

  // if (error) {
  //   return <h1>Error</h1>;
  // }
  // console.log(city);
  // console.log(data);

  return (
    <div className="body">
      <div className="w-3/4 mx-auto pt-9">
        <div id="body-top">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Weather Information
            </h1> 
            <h2 className="mb-2">{city===""?"": `City name: ${city}`}</h2>

            <form
              onSubmit={handleSubmit}
              id="form"
              className="flex flex-wrap items-center mb-4"
            >
              <input
                type="text"
                placeholder="City"
                id="search-input"
                onChange={(e) => setCity(e.target.value)}
                className="border text-black border-blue-500 rounded-lg p-2 mb-4 md:mr-3 w-full md:w-auto"
              />
              <button
                type="submit"
                id="search-button"
                className="bg-blue-500 mb-4 text-white px-4 py-2 rounded-xl md:w-auto w-full"
              >
                Search
              </button>
            </form>
            <div id="weather-top" className="flex flex-wrap justify-center" />
          </div>
        </div>
        {isLoading || isFetching ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>country not found</h1>
        ) : (
          <div id="body-bottom">
            <div
              id="table"
              className={`w-full flex flex-wrap justify-center items-center text-center p-4  ${data?"border border-gray-400":""} `}
            >
              {data &&
                data.weather.map((item:WeatherData, i:number) => {
                  return (
                    <div
                      key={i}
                      className="p-4 border border-gray-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
                    >
                      <h4>{item.date}</h4>
                      <div className="days">
                        <p className="border border-gray-400 p-2">
                          Temperature: {item.temperature}
                        </p>
                        <p className="border border-gray-400 p-2">
                          Humidity: {item.humidity}
                        </p>
                        <p className="border border-gray-400 p-2">
                          Wind_speed: {item.wind_speed}
                        </p>
                        <p className="border border-gray-400 p-2">
                          Description: {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeComponent;
