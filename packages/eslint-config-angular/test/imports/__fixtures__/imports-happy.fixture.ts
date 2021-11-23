import { rules as _TSLint } from '@typescript-eslint/eslint-plugin';
import { process as _process } from 'babel-jest';

import { _A as A, _B as B } from './shared-imports.fixture';

// only for eslint testing
new A(_TSLint);
new B(_process);
