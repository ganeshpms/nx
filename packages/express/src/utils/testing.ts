import { join } from 'path';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { Tree } from '@angular-devkit/schematics';

const testRunner = new SchematicTestRunner(
  '@nrwl/express',
  join(__dirname, '../../collection.json')
);

export function runSchematic(schematicName: string, options: any, tree: Tree) {
  return testRunner.runSchematicAsync(schematicName, options, tree).toPromise();
}
