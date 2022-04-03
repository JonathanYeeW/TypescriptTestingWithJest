import { isTrue } from "./utils";

test("testing isTrue()", () => {
  let bool: boolean = true;
  expect(isTrue(bool)).toBe(true);
  bool = false;
  expect(isTrue(bool)).toBe(false);
});
