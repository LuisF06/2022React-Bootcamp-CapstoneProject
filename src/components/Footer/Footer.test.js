import { render, screen } from "@testing-library/react";
import Footer from "./index";

test("renders Wizeline Dsclaimer in Footer Component", async () => {
  render(<Footer />);
  const title = await screen.findByText(
    "Ecommerce created during Wizeline’s Academy React Bootcamp"
  );
  expect(title.textContent).toBe(
    "Ecommerce created during Wizeline’s Academy React Bootcamp"
  );
});
