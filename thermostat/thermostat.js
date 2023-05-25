class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    let newTemp = this.temperature + 1;
      this.temperature = newTemp;
      return newTemp;
  }
}
module.exports = Thermostat;