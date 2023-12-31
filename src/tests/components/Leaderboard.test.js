import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Leaderboard from "../../components/Leaderboard";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const initialState = {
  authedUser: null,
  users: {
    sarahedo: {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL: "/images/sarahedo.jpg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    tylermcginnis: {
      id: "tylermcginnis",
      password: "abc321",
      name: "Tyler McGinnis",
      avatarURL: "images/",
      answers: {
        vthrdm985a262al8qx3do: "optionOne",
        xj352vofupe1dqz9emx13r: "optionTwo",
      },
      questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    },
  },
  questions: {},
  loadingBar: {},
};

const store = mockStore(initialState);

describe("Leaderboard", () => {
  it("will show the leaderboard page", () => {
    var component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Leaderboard />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
