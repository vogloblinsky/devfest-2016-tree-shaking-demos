import node from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/main.js',
    dest: 'build/main.js',
    format: 'umd',
    sourceMap: false,
    plugins: [
        node({
            jsnext: true, main: true
        }),
        filesize()
    ]
};
