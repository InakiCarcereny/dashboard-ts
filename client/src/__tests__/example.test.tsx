import { render, screen } from "@testing-library/react";
import { Earnings } from "@/app/(routes)/dashboard/components/earnings/Earnings";

describe("Earnings", () => {
  it("should render the earnings component", () => {
    render(<Earnings />);
    const earnings = screen.getByText(/Earnings/i);
    expect(earnings).toBeInTheDocument();
  });
});
