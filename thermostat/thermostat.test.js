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

  test("the thermostat changes when using the down function", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("throws an error if the thermostat tries to go below 10 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.setTempTo10();
    expect(() => {
      thermostat.down();
    }).toThrow("Thermostat is already set to min: 10");
  });

  it("has PowerSaving mode on by default, returns true", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getPowerSavingStatus()).toEqual(true);
  });
});