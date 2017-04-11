/**
 * Only imports what you need
 */
import template from 'lodash-es/template';
import add from 'lodash-es/add';

// Or test with the big import...
//import * as lodash from 'lodash-es';

const compiled = template( '<h1 class="<%-className%>"><%=title%></h1>' );
const addition = add(5,5); //createMathOperation

console.log(addition, compiled({
    className: 'demo',
    title: 'tree-shaking'
}));
