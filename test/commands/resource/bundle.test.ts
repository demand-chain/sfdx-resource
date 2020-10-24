import { expect, test } from '@salesforce/command/lib/test';
//import { ensureJsonMap, ensureString } from '@salesforce/ts-types';

describe('resource:bundle', () => {
  test
    .stdout()
    .command(['resource:bundle', 'test'])
    .it('runs resource:bundle test', ctx => {
      expect(ctx.stdout).to.contain('');
    });
});