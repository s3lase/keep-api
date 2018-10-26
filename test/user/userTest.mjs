import { assert } from "chai";
import User from "../../api/controllers/user";

describe("User", () => {
  it("User should return hello", () => {
    assert.equal(User.sayHello(), "hello");
  });
});
