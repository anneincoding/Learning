const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
  // not fs module in node bue higher level
    this.fs.write(
      this.destinationPath('temp.txt'),
      Math.random().toString()
    )
  }
}