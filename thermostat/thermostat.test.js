const Thermostat = require("./Thermostat");

describe("Thermostat", () => {
  it("returns the initial temperature of 20", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});