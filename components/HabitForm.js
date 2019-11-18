import React from "react";
import { Form, Field } from "@leveluptuts/fresh";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_HABIT = gql`
  mutation addHabit($habit; HabitInput){
    addHabit(habit: $habit){
      _id
      name
    }
  }
`;

const HabitForm = ({ setHabits }) => {
  const [addHabit] = useMutation(ADD_HABIT);
  return (
    <Form
      onSubmit={data => {
        console.log(data);
        addHabit({
          variables: {
            habit: { name: data.habit }
          }
        });
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
