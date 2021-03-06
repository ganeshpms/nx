import { updateJsonFile } from '@nrwl/workspace';

export default {
  description: 'Add @angular-devkit/core as a dev dependency',
  run: () => {
    updateJsonFile('package.json', json => {
      json.devDependencies = {
        ...json.devDependencies,
        ['@angular-devkit/core']: '^0.0.29'
      };
    });
  }
};
