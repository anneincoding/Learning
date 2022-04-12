const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // try to interactive with users in terminal
  prompting(){
    return this.prompt([{
      type: 'input',
      name: 'title',
      message: 'Your project name',
      default: this.appname // get the file folder's name
    }]).then(answers => {
      // from users  {name:'user input values'}
      this.answers = answers;
    })
  }
  writing() {
  // not fs module in node but higher level
    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )
    // templates support EJS
    // template path, output path, data context
    const temp = this.templatePath('h5.html');
    const output = this.destinationPath('output/out-h5.html');
    // const context = {title: 'template title', success: false};
    // const context = {title: 'Anne'};
    const context = this.answers;
    this.fs.copyTpl(temp, output, context);
  }
}