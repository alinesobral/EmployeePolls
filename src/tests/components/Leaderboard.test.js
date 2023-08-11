import { Provider } from "react-redux";
import { createStore } from "redux";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { _login } from "../../utils/_DATA";
import userEvent from "@testing-library/user-event";

import reducer from "../../reducers";
import middleware from "../../middleware";
import Leaderboard from "../../components/Leaderboard";
// import { store } from "../../index.js";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

describe("Leaderboard", () => {
  let store, component;

  beforeEach(() => {
    store = mockStore({
      authedUser: "sarahedo",
    });

    component = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  });

  it("will show the leaderboard page", () => {
    // console.log(store);
    // var component = ReactDOM.render(
    //   <Provider store={store}>
    //     <MemoryRouter>
    //       <Leaderboard />
    //     </MemoryRouter>
    //   </Provider>
    // );
    // expect(component).toMatchSnapshot();
  });
});
