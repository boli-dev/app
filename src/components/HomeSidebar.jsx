import React, { useContext, useState } from "react";
import { Loader, Input, Menu, Form } from "semantic-ui-react";
import useQuery from "../hooks/useQuery";
import OfferContext from "../context/offers/OffersContext";

const HomeSidebar = () => {
  const { loading: serviceLoading, data: serviceData } = useQuery("service");
  const {
    loading: niveauscolariteLoading,
    data: niveauscolariteData,
  } = useQuery("niveauscolarite");
  const [libelle, setLibelle] = useState("");

  const {
    getOffersByService,
    getOffersByNiveau,
    getOffersByLibelle,
  } = useContext(OfferContext);

  return (
    <Menu vertical>
      <Menu.Item>
        <Form
          onSubmit={() => {
            getOffersByLibelle(libelle);
            setLibelle("");
          }}
        >
          <Input
            value={libelle}
            onChange={({ target }) => setLibelle(target.value)}
            placeholder="Search..."
          />
        </Form>
      </Menu.Item>
      <React.Fragment>
        {niveauscolariteLoading || serviceLoading ? (
          <Loader active inline="centered" />
        ) : (
          <React.Fragment>
            <Menu.Item>
              <Menu.Header>Services</Menu.Header>
              <Menu.Menu>
                {serviceData &&
                  serviceData.map((s, i) => (
                    <Menu.Item
                      key={i}
                      name={s.libelle}
                      onClick={() => getOffersByService(s.pfaServic)}
                    />
                  ))}
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>Niveaux scolaire</Menu.Header>
              <Menu.Menu>
                {niveauscolariteData &&
                  niveauscolariteData.map((n, i) => (
                    <Menu.Item
                      key={i}
                      name={n.libelle}
                      onClick={() => getOffersByNiveau(n.niveauScolarite)}
                    />
                  ))}
              </Menu.Menu>
            </Menu.Item>
          </React.Fragment>
        )}
      </React.Fragment>
    </Menu>
  );
};

export default HomeSidebar;
