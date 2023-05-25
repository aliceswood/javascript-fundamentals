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
    expect(thermostat.getPowerSavingMode()).toEqual(true);
  });

  it("changes the PowerSavingMode from true to false", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getPowerSavingMode()).toEqual(true);
    thermostat.setPowerSavingMode(false);
    expect(thermostat.getPowerSavingMode()).toEqual(false);
  });

  it("changes the PowerSavingMode back to true", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.setPowerSavingMode(true);
    expect(thermostat.getPowerSavingMode()).toEqual(true);
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
    thermostat.setPowerSavingMode(false);
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

  it("will return low-usage for temperatures < 18", () => {
    const thermostat = new Thermostat();
    thermostat.setTempTo10();
    expect(thermostat.currentUsage()).toBe("Low-Usage");
  });

  it("will return medium-usage for temperatures from 18 to 25 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.powerSavingSetMax();
    expect(thermostat.currentUsage()).toBe("Medium-Usage");
  });

  it("will return high-usage for temperatures higher than 25 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.nonPowerSavingSetMax();
    expect(thermostat.currentUsage()).toBe("High-Usage");
  });
});
