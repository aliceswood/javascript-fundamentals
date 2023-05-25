class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powersaving = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    let newTemp = this.temperature + 1;
      this.temperature = newTemp;
      return newTemp;
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

  setTempTo10() {
    // used for tests to avoid repetiton of thermostat.down()
    this.temperature = 10;
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
}
module.exports = Thermostat;