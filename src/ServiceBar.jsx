import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";

function ServiceBar({ env, service }) {
  const [statusCode, setStatusCode] = useState("...");
  const checkStatus = async () => {
    let response;
    try {
      setStatusCode("...");
      response = await fetch(env.path + service.end_point);
      setStatusCode(response.status);
    } catch (error) {
      setStatusCode("x");
    }
    console.log(env.path + service.end_point);
  };

  useEffect(() => {
    checkStatus();
  }, [env]);

  return (
    <>
      <div className="flex flex-row justify-center font-['Futura'] bg-stone-200 rounded-3xl max-w-fit m-3">
        <p className="mx-3 my-1 p-1 font-medium">{`${service.service_name} service`}</p>
        <p className="flex items-center justify-center ml-3 my-1 p-1">
          <span className="text-xs font-extralight">status code:</span>
          <span className="my-auto p-1 font-light text-sm">{statusCode}</span>
        </p>
        <p className="mr-3 ml-1 my-1 p-1 flex items-center justify-center">
          {/* checking for status 200 only */}
          {statusCode === 200 && (
            <FcApproval className="text-green-500 size-5" />
          )}
          {statusCode === "..." && <FcMinus className="size-5" />}
          {statusCode != 200 && statusCode != "..." && (
            <FcCancel className="size-5" />
          )}
        </p>
      </div>
    </>
  );
}

export default ServiceBar;
