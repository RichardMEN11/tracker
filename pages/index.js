import React, {useState} from "react";
import Layout from "../components/Layout";
import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  const [habits, setHabits] = useState(['Do the dishes']);
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Level up your life</h1>
        <div className="list">
          <HabitForm setHabits={setHabits}/>
          <HabitList habits={habits}/>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin-top: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }

        .list {
          max-width: 600px;
          margin: auto;
        }
      `}</style>
    </Layout>
  );
};
export default withApollo(Home);
