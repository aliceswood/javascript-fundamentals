const Thermostat = require("./Thermostat");

describe("Thermostat", () => {
  it("returns the initial temperature of 20", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  test("the thermostat changes when using the up function", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });
});