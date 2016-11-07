import { fooObject, barObject, fooFunction } from './utils.js';

import * as lib from './math.utils';

import { ColorPoint } from './class';

import { log } from './module.js'

console.log(fooObject.a);

console.log(lib.sqrt);

console.log(log.debug('tree-shaking'));

let cp = new ColorPoint(25, 8, 'green');

cp.move(5);
