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

  it("changes the PowerSavingStatus from true to false", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getPowerSavingStatus()).toEqual(true);
    expect(thermostat.changePowerSavingStatus()).toBe(false);
  });

  it("changes the PowerSavingStatus back to true", () => {
    const thermostat = new Thermostat();
    thermostat.changePowerSavingStatus();
    expect(thermostat.changePowerSavingStatus()).toBe(true);
  });

  it("caps the temperature at 25 degrees is PowerSaving is on", () => {
    const thermostat = new Thermostat();
    thermostat.powerSavingSetMax();
    expect(() => {
      thermostat.up();
    }).toThrow("Thermostat is already set to PowerSaving max: 25");
  });

  it("caps the temperature at 32 degrees is PowerSaving is off", () => {
    const thermostat = new Thermostat();
    thermostat.changePowerSavingStatus();
    thermostat.nonPowerSavingSetMax();
    expect(() => {
      thermostat.up();
    }).toThrow("Thermostat is already set to max: 32");
  });

  it("will reset the temperature to 20 degrees using reset", () => {
    const thermostat = new Thermostat();
    thermostat.powerSavingSetMax();
    expect(thermostat.getTemperature()).toBe(25);
    expect(thermostat.reset()).toEqual(20);
  });
});