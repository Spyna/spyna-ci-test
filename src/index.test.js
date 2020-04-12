import Greet from "./index";
describe("My lib tests", () => {
  beforeEach(() => {});

  afterEach(() => {});

  it("should greet a user", () => {
    const greet = Greet("spyna");

    expect(greet).toBe("Hello spyna");
  });

  it("should greet an undefined user", () => {
    const greet = Greet();

    expect(greet).toBe("Hello ");
  });
});
