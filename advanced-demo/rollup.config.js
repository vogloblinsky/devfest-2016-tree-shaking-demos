import node from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/main.js',
    dest: 'build/main.rollup.js',
    format: 'cjs',
    sourceMap: false,
    plugins: [
        node({
            jsnext: true, main: true
        }),
        filesize()
    ]
};
