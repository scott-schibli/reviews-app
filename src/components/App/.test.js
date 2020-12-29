import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store"
import App from ".";


test("I am alive", () => {
  render(<Provider store={store}><App/></Provider>);
  const appName = screen.getByTestId("app-name");
  console.log(appName.className);
  expect(appName.className).toEqual("app-name");
});
