import React from "react";
import { Form, Field } from "@leveluptuts/fresh";

const HabitForm = ({setHabits}) => {
  return (
    <Form
      onSubmit={data => {
        console.log(data);
        setHabits(prevState => [...prevState, data.habit]);
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
