#!/usr/bin/env node

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Project name?'
  }
]).then(answers => {
  const tmplDir = path.join(__dirname, 'templates');
  const desDir = process.cwd();
  fs.readdir(tmplDir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      ejs.renderFile(path.join(tmplDir,file), answers, (err, result) => {
        if (err) throw err;
        fs.writeFileSync(path.join(desDir, file), result);
      })
    });
  })
  // console.log(answers)
})