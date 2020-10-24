import { expect, test } from '@salesforce/command/lib/test';
//import { ensureJsonMap, ensureString } from '@salesforce/ts-types';

describe('resource:unbundle', () => {
    test
      .stdout()
      .command(['resource:unbundle', 'test'])
      .it('runs resource:unbundle test', ctx => {
        expect(ctx.stdout).to.contain('');
      });
  });
