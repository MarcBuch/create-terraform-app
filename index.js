#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

let projectName;

function init() {
  const program = new Command('create-terraform-app')
    .argument(
      '<project-directory>',
      'File path to place the Terraform template'
    )
    .usage(`${chalk.green('<project-directory>')}`)
    .action((name) => {
      projectName = name;
    })
    .addHelpText(
      'after',
      `\nOnly ${chalk.green('<project-directory>')} is required.`
    )
    .showHelpAfterError()
    .parse(process.argv);

  const fullPath = path.resolve(projectName);

  console.log(`Creating a new Terraform project in ${chalk.green(fullPath)}.`);
  fs.ensureDirSync(fullPath);

  // Copy main.tf
  fs.copyFile(__dirname + '/template/main.tf', fullPath + '/main.tf', (err) => {
    if (err) {
      err ? console.log('Error occured: ', err) : null;
    }
  });

  // Copy versions.tf
  fs.copyFile(
    __dirname + '/template/versions.tf',
    fullPath + '/versions.tf',
    (err) => {
      err ? console.log('Error occured: ', err) : null;
    }
  );
}

init();
