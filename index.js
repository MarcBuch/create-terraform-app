import { Command } from 'commander';
import chalk from 'chalk';

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

  console.log(projectName);
}
init();
