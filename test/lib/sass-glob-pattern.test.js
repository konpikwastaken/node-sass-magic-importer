import test from 'ava';
import path from 'path';

import { sassGlobPattern } from '../../js/lib/sass-glob-pattern';

test(`Should be a function.`, (t) => {
  t.is(typeof sassGlobPattern, `function`);
});

test(`Should return unmodified base URL if URL with extension is given.`, (t) => {
  const url = sassGlobPattern({ path }, `base-with.extension`);

  t.is(url, `base-with.extension`);
});

test(`Should return glob pattern from clean base URL.`, (t) => {
  const url = sassGlobPattern({ path }, `clean-base`);

  t.is(url, `?(_)clean-base@(.css|.sass|.scss)`);
});
