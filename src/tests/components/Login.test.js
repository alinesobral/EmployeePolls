import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import reducer from "../../reducers";
import middleware from "../../middleware";
import Login from "../../components/Login";

const store = legacy_createStore(reducer, middleware);
console.log(store.getState());

describe("Login", () => {
  it("will show the login page", () => {
    var component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("will log the user in", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    var username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "sarahedo" } });
    var password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "password123" } });
    var loginUser = screen.getByTestId("loginUserBtn");
    fireEvent.click(loginUser);

    expect(component.getByTestId("dashboard")).toBeInTheDocument();
  });

  it("will show an alert for an unsuccessful authentication", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    var username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "sarahedo" } });
    var password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "wrongPassword" } });
    var loginUser = screen.getByTestId("loginUserBtn");
    fireEvent.click(loginUser);

    expect(component).toMatchSnapshot();
  });
});
