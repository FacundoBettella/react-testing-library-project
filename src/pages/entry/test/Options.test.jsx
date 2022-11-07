import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("Displays image for each scoop options from server", async () => {
  render(<Options optionType="scoops" />);

  // find multiple images
  // $ in a regExp minds that "scoop" is it at ends of the string.
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  /* change getAllByRole for findAllByRole when it implicate a async func */
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const allText = scoopImages.map((element) => element.alt);
  expect(allText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each toppings options from server", async () => {
  render(<Options optionType="toppings" />);

  // find multiple images
  // $ in a regExp minds that "scoop" is it at ends of the string.
  const scoopImages = await screen.findAllByRole("img", { name: /topping$/i });
  expect(scoopImages).toHaveLength(3);

  // confirm alt text of images
  const allText = scoopImages.map((element) => element.alt);
  expect(allText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"]);
});
