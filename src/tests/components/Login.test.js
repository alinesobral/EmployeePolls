import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "../../reducers";
import Login from "../../components/Login";
import App from "../../App";

const preloadedState = {
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
const mockStore = configureStore({
  reducer: reducers,
  preloadedState,
});

describe("Login", () => {
  it("will show the login page", () => {
    var component = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByTestId("login")).toBeInTheDocument();
  });

  it(" will return the login page for an invalid username/password combination", async () => {
    var component = render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    var username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "sarahedo" } });
    var password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "wrongPwd" } });
    var loginUser = screen.getByTestId("loginUserBtn");
    fireEvent.click(loginUser);

    await waitFor(() => {
      expect(screen.getByTestId("loginError")).toBeInTheDocument();
    });
  });

  it("will log the user in", async () => {
    var component = render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    var username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "sarahedo" } });
    var password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "password123" } });
    var loginUser = screen.getByTestId("loginUserBtn");
    fireEvent.click(loginUser);

    await waitFor(() => {
      expect(screen.getByTestId("dashboard")).toBeInTheDocument();
    });
  });
});
