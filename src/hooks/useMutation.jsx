import { useState } from "react";
import Http from "../Http";
import { useHistory } from "react-router-dom";

const useQuery = () => {
  const history = useHistory();
  const [state, setstate] = useState({
    loading: false,
    error: "",
  });

  const mutateData = (url, params, method, path) => {
    setstate({
      loading: true,
    });

    if (method == "post") {
      Http.post(url, params)
        .then(() => {
          setTimeout(() => {
            setstate({
              loading: false,
              error: "",
            });
            history.push(path);
          }, 1000);
        })
        .catch((e) => {
          setstate({
            loading: false,
            error: "error whene add data",
          });
        });
    } else if (method == "delete") {
      Http.delete(url)
        .then(() => {
          const r = window.confirm("are you shur");
          if (r) {
            setTimeout(() => {
              setstate({
                loading: false,
                error: "",
              });
            }, 1000);
            history.go(path);
          }
        })
        .catch((e) => {
          setstate({
            loading: false,
            error: "error whene delete data",
          });
        });
    } else {
      Http.put(url, params)
        .then(() => {
          setTimeout(() => {
            setstate({
              loading: false,
              error: "",
            });
            history.push(path);
          }, 1000);
        })
        .catch((e) => {
          setstate({
            loading: false,
            error: "error whene update data",
          });
        });
    }
  };

  const { loading, error } = state;
  return {
    loading,
    mutateData,
    error,
  };
};

export default useQuery;
