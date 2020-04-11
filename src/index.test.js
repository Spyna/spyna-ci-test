import Greet from "./index";
describe("My lib tests", () => {
  beforeEach(() => {});

  afterEach(() => {});
  let container = null;

  it("should greet a user", () => {
    const greet = Greet("spyna");

    expect(greet).toBe("Hello spyna");
  });
});
