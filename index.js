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

  const destDir = path.resolve(projectName);

  console.log(`Creating a new Terraform project in ${chalk.green(destDir)}.`);
  fs.ensureDirSync(destDir);

  let templateDir = path.join(__dirname + '/template');

  fs.copy(templateDir, destDir, (err) => {
    if (err) throw err;
  });
  console.log('Done');
}

init();
