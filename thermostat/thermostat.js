class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powersaving = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.getPowerSavingStatus() === true && this.temperature === 25) {
      throw new Error("Thermostat is already set to PowerSaving max: 25");
    } else if (
      this.getPowerSavingStatus() === false &&
      this.temperature === 32
    ) {
      throw new Error("Thermostat is already set to max: 32");
    } else {
      let newTemp = this.temperature + 1;
      this.temperature = newTemp;
      return newTemp;
    }
  }

  down() {
    if (this.temperature <= 10) {
      throw new Error("Thermostat is already set to min: 10");
    } else {
      let newTemp = this.temperature - 1;
      this.temperature = newTemp;
      return newTemp;
    }
  }

  getPowerSavingStatus() {
    return this.powersaving;
  }

  changePowerSavingStatus() {
    if (this.powersaving === true) {
      return (this.powersaving = false);
    } else {
      return (this.powersaving = true);
    }
  }

  reset() {
    this.temperature = 20;
    return this.temperature;
  }

  setTempTo10() {
    // used for tests to avoid repetiton of thermostat.down()
    this.temperature = 10;
  }
  powerSavingSetMax() {
    // used for tests to avoid repetiton of thermostat.up()
    this.temperature = 25;
  }
  nonPowerSavingSetMax() {
    // used for tests to avoid repetiton of thermostat.up()
    this.temperature = 32;
  }

  currentUsage() {
    if (this.temperature < 18) {
      return "Low-Usage";
    } else if ((this.temperature = 18 && this.temperature <= 25)) {
      return "Medium-Usage";
    } else {
      return "High-Usage";
    }
  }
}
module.exports = Thermostat;