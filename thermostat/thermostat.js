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

  setTempTo10() {
    // used for tests to avoid repetiton of thermostat.down()
    this.temperature = 10;
  }
  powerSavingSetMax() {
    // used for tests to avoid repetiton of thermostat.up()
    this.temperature = 25;
  }
}
module.exports = Thermostat;