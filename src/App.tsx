import React, { useState, useEffect } from "react";
import axios from "axios";

const App: React.FC = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.thecatapi.com/v1";

  interface CatImage {
    url: string;
  }
  const [urls, setUrls] = useState<string[]>([]);
  const fetchCatImages = async () => {
    try {
      const response = await axios.get<CatImage[]>(`${BASE_URL}/images/search?limit=100`, {
        headers: {
          "x-api-key": API_KEY,
        },
      });

      const urls = response.data.map((img: CatImage) => img.url);
      setUrls(urls);
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };

  useEffect(() => {
    fetchCatImages();
  });

  return (
    <div className="font-inter container mx-auto lg:px-24 min-h-screen flex flex-grow bg-black">
      <div className="flex flex-col justify-between flex-1">
        <section className="flex flex-col flex-grow py-2">
          <main className="pb-10 flex-1 flex flex-col justify-start items-start text-sm">
            <div className="w-full max-w-7xl">
              <div className="px-6 block mb-4 mt-4">
                <h3 className="text-gray-400 font-bold">Catooo</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 md:gap-4 px-6">
                {urls.map((url: string, index: number) => (
                  <img key={index} src={url} alt={`Cat ${index}`} />
                ))}
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};
export default App;
