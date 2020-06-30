import React, { useState } from "react";
import FormulaireContext from "./FormulaireContext";
import Http from "../../Http";
import http from "../../Http";

const FormulaireState = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    key: "",
  });

  const addFormulaire = (data, nexStep) => {
    try {
      setState({ loading: true });
      Http.post("formulaire", data)
        .then(({ data }) =>
          setTimeout(() => {
            localStorage.setItem("formulaire", data.formulaire);
            setState({ loading: false });
            nexStep();
          }, 1000)
        )
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const addDiplome = (data, nexStep) => {
    try {
      setState({ loading: true });
      Http.post("diplome", data)
        .then(() =>
          setTimeout(() => {
            setState({ loading: false });
            nexStep();
          }, 1000)
        )
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const addCertificat = (data, nexStep) => {
    try {
      setState({ loading: true });
      Http.post("certificat", data)
        .then(() =>
          setTimeout(() => {
            setState({ loading: false });
            nexStep();
          }, 1000)
        )
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const addExperience = (data, nexStep) => {
    try {
      setState({ loading: true });
      Http.post("experience", data)
        .then(() =>
          setTimeout(() => {
            setState({ loading: false });
            nexStep();
          }, 1000)
        )
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const confirmation = (offerId) => {
    try {
      setState({ loading: true });
      Http.post("candidat", {
        formulaire: {
          formulaire: localStorage.getItem("formulaire"),
        },
      })
        .then(({ data }) => {
          http
            .post(`candidatoffres/candidat/${data.candidat}/offer/${offerId}`)
            .then(() =>
              setTimeout(() => {
                setState({ loading: false, key: data.candidat });
              }, 1000)
            )
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormulaireContext.Provider
      value={{
        state,
        addFormulaire,
        addDiplome,
        addCertificat,
        addExperience,
        confirmation,
      }}
    >
      {children}
    </FormulaireContext.Provider>
  );
};

export default FormulaireState;
