import template from 'lodash-es/template';
import add from 'lodash-es/add';

const compiled = template( '<h1 class="<%-className%>"><%=title%></h1>' );
const addition = add(5,5); //createMathOperation

console.log(addition, compiled({
    className: 'demo',
    title: 'tree-shaking'
}));

/*
import * as lodash from 'lodash-es';
const compiled = lodash.template( '<h1 class="<%-className%>"><%=title%></h1>' );
const addition = lodash.add(5,5);
*/
