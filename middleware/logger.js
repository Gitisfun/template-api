import chalk from "chalk";

class Logger {
  static generic(type, color, txt) {
    if (process.env.CO_MODE === "DEV") {
      console.log(color(`[${type}] ${txt}`));
    }
  }

  static success(txt) {
    this.generic("SUCCESS", chalk.green, txt);
  }

  static info(txt) {
    this.generic("INFO", chalk.blue, txt);
  }

  //static query(table, txt) {
  //this.generic(table, tableStates(table), txt);
  //}

  static error(txt) {
    this.generic("ERROR", chalk.red, txt);
  }
}

export default Logger;
