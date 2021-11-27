import React, { useEffect, useState } from 'react';
import './App.css';
import { DOMAIN, ENDPOINTS } from './constants';


const App = () => {
  const [headlines, setHeadlines] = useState<any>([]);
  
  useEffect(() => {
    fetch(`${DOMAIN}${ENDPOINTS.headlines}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setHeadlines(data?.data?.articles);
    });
  }, []);

  useEffect(() => {
    console.log(headlines);
  }, [headlines]);

  return (
    <div className="App">
      {
        headlines?.map((headline: any) => {
          console.log(headline);
          return (
          <div key={headline.title}>
            <h1>{headline.title}</h1>
            <img src={headline.urlToImage} alt={headline.title} />
          </div>
        );
      })
      }
    </div>
  );
};       

export default App;