import React from "react";
import { Card, List, Icon } from "semantic-ui-react";

const Tab1 = ({ profiel }) => {
  return (
    <React.Fragment>
      <Card fluid>
        <Card.Content>
          <Card.Header>Info Perso</Card.Header>
        </Card.Content>
        <Card.Content>
          <List>
            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>Nom</List.Header>
                <List.Description>
                  {profiel && profiel.formulaire.nom}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name="right triangle" />
              <List.Content>
                <List.Header>Prenom</List.Header>
                <List.Description>
                  {profiel && profiel.formulaire.prenom}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>Email</List.Header>
                <List.Description>
                  {profiel && profiel.formulaire.email}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>Date de naissance</List.Header>
                <List.Description>
                  {profiel && profiel.formulaire.birthday}
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>diplomes</Card.Header>
        </Card.Content>
        <Card.Content>
          <List>
            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>Date d'obtation</List.Header>
                <List.Description>
                  {profiel &&
                    profiel.formulaire.diplomes &&
                    profiel.formulaire.diplomes[0].dateObt}
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>nom d'universite</List.Header>
                <List.Description>
                  {profiel &&
                    profiel.formulaire.diplomes &&
                    profiel.formulaire.diplomes[0].nom_unive}
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>experiences</Card.Header>
        </Card.Content>
        <Card.Content>
          <List>
            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>experience</List.Header>
                <List.Description>
                  {profiel &&
                    profiel.formulaire.experiences &&
                    profiel.formulaire.experiences[0].libelee}
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>date d'ebut</List.Header>
                <List.Description>
                  {profiel &&
                    profiel.formulaire.experiences &&
                    profiel.formulaire.experiences[0].dateDebut}
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>date fin</List.Header>
                <List.Description>
                  {profiel &&
                    profiel.formulaire.experiences &&
                    profiel.formulaire.experiences[0].dateFin}
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>certificat</Card.Header>
        </Card.Content>
        <Card.Content>
          <List>
            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>Certificat</List.Header>
                <List.Description>
                  {profiel &&
                    profiel.formulaire.certificat &&
                    profiel.formulaire.certificat[0].libelle}
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <Icon name="help" />
              <List.Content>
                <List.Header>Date d'obtation</List.Header>
                <List.Description>
                  {profiel &&
                    profiel.formulaire.certificat &&
                    profiel.formulaire.certificat[0].birthday}
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default Tab1;
