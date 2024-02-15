import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

test("Header component renders correctly", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Lista de Tareas/i);
  expect(headerElement).toBeInTheDocument();
});
