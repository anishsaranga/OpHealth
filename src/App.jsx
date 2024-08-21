import React, { useState } from "react";
import ServiceBar from "./ServiceBar";

function App() {
  const environments = [
    { env_name: "development", path: "app.optalk.ai" },
    { env_name: "testing", path: "app.optalk.ai" },
    { env_name: "staging", path: "app.optalk.ai" },
    { env_name: "production", path: "app.optalk.ai" },
  ];

  const services = [{ service_name: "login", end_point: "/login" }];

  const [env, setEnv] = useState(environments[0]);
  // console.log(env);

  return (
    <>
      <div className="mx-auto my-7 md:my-9 lg:my-11">
        {/* <img src="" alt="<logo goes here>" /> */}
        <h1 className="text-stone-100 font-medium font-['Futura'] text-6xl text-center mx-auto my-3">
          OpHealth
        </h1>
        <h3 className="text-stone-300 font-normal font-['Futura'] text-center mt-5 md:mt-10 my-5 p-5">
          select environment to check health status of optalk services
        </h3>
        <div className="mx-auto my-5 md:my-7 lg:my-15 flex flex-row justify-center">
          <select
            className="py-2 px-2 rounded-lg mx-auto my-2 shadow-inner"
            onChange={(e) => {
              setEnv(environments[e.target.value]);
              // console.log(e.target.value);
            }}
          >
            {
              environments.map((key, index) => (
                <option
                  key={key.env_name}
                  value={index}
                  className="font-['Futura']"
                >
                  {key.env_name}
                </option>
              ))
              /* {environments &&
              environments.map((environment) => (
                <option value={environment} id={environment}></option>
              ))} */
            }
          </select>
        </div>

        <div className="flex flex-row justify-center place-items-center place-content-center m-3 md:m-5">
          <div className="flex flex-col justify-between">
            {services.map((service, index) => (
              <ServiceBar
                key={service}
                env={env}
                service={service}
              ></ServiceBar>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
