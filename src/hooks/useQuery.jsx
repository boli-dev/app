import { useState, useEffect } from "react";
import Http from "../Http";

const useQuery = (url) => {
  const [state, setstate] = useState({
    loading: false,
    data: [],
    error: "",
  });

  const loadData = () => {
    setstate({
      loading: true,
    });

    Http.get(url)
      .then(({ data }) => {
        setTimeout(() => {
          setstate({
            loading: false,
            data,
            error: "",
          });
        }, 1000);
      })
      .catch((e) => {
        setstate({
          loading: false,
          data: [],
          error: "error whene retrive data",
        });
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const { loading, data, error } = state;
  return {
    loading,
    data,
    error,
  };
};

export default useQuery;
