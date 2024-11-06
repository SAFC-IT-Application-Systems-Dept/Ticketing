import React, { useEffect, useState } from "react";
import { fetchHelloMessage } from "@/api/hello";

const HelloPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const getMessage = async () => {
      try {
        const data = await fetchHelloMessage();
        setMessage(data.message);
      } catch (error) {
        console.error("Failed to load message:", error);
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
};

export default HelloPage;
