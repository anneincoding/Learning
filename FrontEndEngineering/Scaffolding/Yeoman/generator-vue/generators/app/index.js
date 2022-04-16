const Generator = require('yeoman-generator');
const rd=require('rd');

module.exports = class extends Generator {
  prompting(){
    return this.prompt([{
      type: 'input',
      name: 'title',
      message: 'Your project name',
      default: this.appname 
    }]).then(answers => {
      this.answers = answers;
    })
  }
  writing() {

  }
}