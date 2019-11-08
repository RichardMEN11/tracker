import React from "react";
import Habit from "./Habit";
const HabitList = ({ habits }) => {
  return (
    <section>
      <h2>My Habits</h2>
      {habits.map((habit, index) => (
        <Habit key={habit} habit={habit} index={index} />
      ))}
    </section>
  );
};

export default HabitList;
