function sum(a, b) {
    return a + b;
  }
  
test("it should return sum", () => {
    expect(sum(1, 2)).toBe(3);
});