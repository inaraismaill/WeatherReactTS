// import { useQuery } from "@tanstack/react-query";
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

interface WeatherDataByCity {
  [key: string]: {
    weather: WeatherData[];
  };
}

const data: WeatherDataByCity = {
  usa: {
    weather: [
      {
        date: "24",
        temperature: 25,
        humidity: 70,
        wind_speed: 10,
        description: "Cloudy and drying weather",
      },
      {
        date: "2024-05-25",
        temperature: 27,
        humidity: 68,
        wind_speed: 12,
        description: "Strong wind and warm days",
      },
      {
        date: "2024-05-26",
        temperature: 23,
        humidity: 72,
        wind_speed: 8,
        description: "Cool and cloudy weather",
      },
      {
        date: "2024-05-27",
        temperature: 24,
        humidity: 69,
        wind_speed: 9,
        description: "Moderately warm weather",
      },
      {
        date: "2024-05-28",
        temperature: 26,
        humidity: 67,
        wind_speed: 11,
        description: "Strong days are coming",
      },
    ],
  },
  china: {
    weather: [
      {
        date: "2024-05-24",
        temperature: 28,
        humidity: 75,
        wind_speed: 15,
        description: "Warm and reassuring days",
      },
      {
        date: "2024-05-25",
        temperature: 30,
        humidity: 72,
        wind_speed: 17,
        description: "Very warm days",
      },
      {
        date: "2024-05-26",
        temperature: 27,
        humidity: 77,
        wind_speed: 14,
        description: "Cloudy and drying weather",
      },
      {
        date: "2024-05-27",
        temperature: 29,
        humidity: 73,
        wind_speed: 16,
        description: "Warm and hot days",
      },
      {
        date: "2024-05-28",
        temperature: 31,
        humidity: 70,
        wind_speed: 18,
        description: "Cool and bright days",
      },
    ],
  },
  india: {
    weather: [
      {
        date: "2024-05-24",
        temperature: 35,
        humidity: 80,
        wind_speed: 8,
        description: "Hot and humid",
      },
      {
        date: "2024-05-25",
        temperature: 34,
        humidity: 78,
        wind_speed: 10,
        description: "Warm with occasional showers",
      },
      {
        date: "2024-05-26",
        temperature: 33,
        humidity: 75,
        wind_speed: 9,
        description: "Partly cloudy and pleasant",
      },
      {
        date: "2024-05-27",
        temperature: 36,
        humidity: 82,
        wind_speed: 11,
        description: "Hot and sunny",
      },
      {
        date: "2024-05-28",
        temperature: 37,
        humidity: 79,
        wind_speed: 12,
        description: "Very hot and humid",
      },
    ],
  },
  brazil: {
    weather: [
      {
        date: "2024-05-24",
        temperature: 28,
        humidity: 70,
        wind_speed: 11,
        description: "Warm and sunny",
      },
      {
        date: "2024-05-25",
        temperature: 29,
        humidity: 72,
        wind_speed: 13,
        description: "Hot with occasional clouds",
      },
      {
        date: "2024-05-26",
        temperature: 27,
        humidity: 68,
        wind_speed: 10,
        description: "Pleasant weather with light breeze",
      },
      {
        date: "2024-05-27",
        temperature: 26,
        humidity: 65,
        wind_speed: 9,
        description: "Cooler with gentle winds",
      },
      {
        date: "2024-05-28",
        temperature: 28,
        humidity: 67,
        wind_speed: 11,
        description: "Warm and clear skies",
      },
    ],
  },
  russia: {
    weather: [
      {
        date: "2024-05-24",
        temperature: 15,
        humidity: 60,
        wind_speed: 20,
        description: "Cold and windy",
      },
      {
        date: "2024-05-25",
        temperature: 16,
        humidity: 62,
        wind_speed: 18,
        description: "Chilly with scattered showers",
      },
      {
        date: "2024-05-26",
        temperature: 14,
        humidity: 58,
        wind_speed: 19,
        description: "Brisk and partly cloudy",
      },
      {
        date: "2024-05-27",
        temperature: 17,
        humidity: 65,
        wind_speed: 21,
        description: "Cool with moderate winds",
      },
      {
        date: "2024-05-28",
        temperature: 15,
        humidity: 63,
        wind_speed: 22,
        description: "Cold and overcast",
      },
    ],
  },
};

function HomeComponent() {
  const [city, setCity] = useState<string>("");

  // const { data, isLoading, isFetching, refetch, error } = useQuery({

  //   queryKey: ["weather", city],
  //   queryFn: () =>
  //     fetch(`http://localhost:3000/${city}`).then((response) =>
  //       response.json()
  //     ),
  //   enabled: false,
  //   retry: false,
  // });

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   refetch();
  // };

  // if (isLoading || isFetching) {
  //   return <h1>Loading...</h1>;
  // }

  // if (error) {
  //   return <h1>Error</h1>;
  // }
  // console.log(city);
  // console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const inputElement = target[0] as HTMLInputElement;
    setCity(inputElement.value);
  };

  return (
    <div className="body">
      <div className="w-3/4 mx-auto pt-9">
        <div id="body-top">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Weather Information
            </h1>
            <h2 className="mb-2">{city === "" ? "" : `City name: ${city[0].toUpperCase() +city.slice(1)}`}</h2>

            <form
              onSubmit={(e) => handleSubmit(e)}
              id="form"
              className="flex flex-wrap items-center mb-4"
            >
              <input
                type="text"
                placeholder="City"
                id="search-input"
                // onChange={(e) => setCity(e.target.value)}
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

        <div id="body-bottom">
          <div
            id="table"
            className={`w-full flex flex-wrap justify-center items-center text-center p-4  ${
              data[city] ? "border border-gray-400" : ""
            } `}
          >
            {data[city] &&
              data[city].weather.map((item: WeatherData, i: number) => {
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
      </div>
    </div>
  );
}

export default HomeComponent;
