import React, { useState, useEffect } from "react";
import axios from "axios";


export const METHODS = {
  GET: "get",
  POST: "post"
}

const Fetch = ({ url, method, body }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (method === METHODS.GET) {
      axios.get(url)
        .then(res => {
          setIsLoading(false);
          setData(res.data);
        })
        .catch(e => {
          setIsLoading(false);
          console.error(e);
        })
    } else if (method == METHODS.POST) {
      axios.post(url, JSON.stringify(body))
        .then(res => {
          setIsLoading(false);
          setData(res.data);
        })
        .catch(e => {
          setIsLoading(false);
          console.error(e);
        })
    }
  }, [url, method, body])
  return [data, isLoading];
}

export const fetch = () => {
  
}

export default Fetch;