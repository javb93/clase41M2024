import { render, screen } from "@testing-library/react";
import Lista from "./Lista";

test("Lista component renders correctly", () => {
  render(<Lista tareassource="../assets/tarea" />);
  const headerElement = screen.getByText(/Lista de elementos/i);
  expect(headerElement).toBeInTheDocument();
});

test("Lista component renders the correct number of tasks", () => {
  render(<Lista tareassource="../assets/tarea" />);
  const taskElements = screen.getAllByRole("listitem");
  expect(taskElements.length).toBeGreaterThan(0);
});

test("Lista component works correctly with 0 tasks", () => {
  render(<Lista tareassource="../assets/tareatest" />);
  const taskElements = screen.queryAllByRole("listitem");
  expect(taskElements.length).toBe(0);
});
