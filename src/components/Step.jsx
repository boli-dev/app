import React, { useState } from "react";
import { Step, Icon, Grid } from "semantic-ui-react";

const StepCom = ({ steps }) => {
  const [state, setState] = useState({
    step: 1,
  });

  const nextstep = () => {
    setState(({ step }) => ({
      step: step + 1,
    }));
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <Step.Group fluid vertical stackable="tablet" size="mini">
            {steps &&
              steps.map((step, i) => (
                <Step
                  completed={step.step < state.step}
                  active={state.step === step.step}
                  key={i}
                >
                  <Icon name={step.icon} />
                  <Step.Content>
                    <Step.Title> {step.title} </Step.Title>
                    <Step.Description> {step.description} </Step.Description>
                  </Step.Content>
                </Step>
              ))}
          </Step.Group>
        </Grid.Column>
        <Grid.Column style={{ padding: 0 }} width={12}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {state.step === step.step && (
                <step.component nextstep={nextstep} />
              )}
            </React.Fragment>
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default StepCom;
