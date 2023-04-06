import solid from 'solid-start/vite';
import {defineConfig} from 'vite';
import staticAdapter from 'solid-start-static';

const config = defineConfig(({command, mode, ssrBuild}) => {

    return {
        base: mode === 'production' ? '/' : '/',
        plugins: [solid({ssr: true, solid: {hydratable: true}, adapter: staticAdapter()})],
    };
});

export default config;
