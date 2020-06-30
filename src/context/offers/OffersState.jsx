import React, { useState, useEffect } from "react";
import Http from "../../Http";
import OffersContext from "./OffersContext";
import { useHistory } from "react-router-dom";

const OffersState = ({ children }) => {
  const history = useHistory();
  const [state, setState] = useState({
    loading: false,
    offers: [],
  });

  const loadOffers = () => {
    setState({
      loading: true,
    });
    Http.get("offres")
      .then(({ data }) => {
        setTimeout(() => {
          setState({
            loading: false,
            offers: data,
          });
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getOffersByService = (id) => {
    history.push("/");
    setState({
      loading: true,
    });
    Http.get(`offres/service/${id}`)
      .then(({ data }) => {
        setTimeout(() => {
          setState({
            loading: false,
            offers: data,
          });
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getOffersByNiveau = (id) => {
    history.push("/");
    setState({
      loading: true,
    });
    Http.get(`offres/niveux/${id}`)
      .then(({ data }) => {
        setTimeout(() => {
          setState({
            loading: false,
            offers: data,
          });
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getOffersByLibelle = (lib) => {
    history.push("/");
    setState({
      loading: true,
    });
    Http.get(`offres/libelle/${lib}`)
      .then(({ data }) => {
        setTimeout(() => {
          setState({
            loading: false,
            offers: data,
          });
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    loadOffers();
  }, []);

  return (
    <OffersContext.Provider
      value={{
        state,
        getOffersByService,
        getOffersByNiveau,
        getOffersByLibelle,
      }}
    >
      {children}
    </OffersContext.Provider>
  );
};

export default OffersState;
