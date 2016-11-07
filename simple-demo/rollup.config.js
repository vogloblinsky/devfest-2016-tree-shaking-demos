import filesize from 'rollup-plugin-filesize';

export default {
    entry: 'src/main.js',
    dest: 'build/main.rollup.js',
    format: 'umd',
    sourceMap: false,
    plugins: [
        filesize()
    ]
};
