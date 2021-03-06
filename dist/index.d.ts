import { Plugin as Plugin_2 } from 'vite';
import { SFCScriptCompileOptions } from '@vue/compiler-sfc';
import { SFCStyleCompileOptions } from '@vue/compiler-sfc';
import { SFCTemplateCompileOptions } from '@vue/compiler-sfc';
import { ViteDevServer } from 'vite';

export declare interface Options {
    include?: string | RegExp | (string | RegExp)[];
    exclude?: string | RegExp | (string | RegExp)[];
    isProduction?: boolean;
    /**
     * Enable or disable usage of inline template for the script setup
     * @default true
     */
    allowUseInlineTemplate?: boolean;
    script?: Partial<SFCScriptCompileOptions>;
    template?: Partial<SFCTemplateCompileOptions>;
    style?: Partial<SFCStyleCompileOptions>;
    /**
     * Transform Vue SFCs into custom elements.
     * **requires Vue \>= 3.2.0 & Vite \>= 2.4.4**
     * - `true`: all `*.vue` imports are converted into custom elements
     * - `string | RegExp`: matched files are converted into custom elements
     *
     * @default /\.ce\.vue$/
     */
    customElement?: boolean | string | RegExp | (string | RegExp)[];
    /**
     * Enable Vue ref transform (experimental).
     * https://github.com/vuejs/vue-next/tree/master/packages/ref-transform
     *
     * **requires Vue \>= 3.2.5**
     *
     * - `true`: transform will be enabled for all vue,js(x),ts(x) files except
     *           those inside node_modules
     * - `string | RegExp`: apply to vue + only matched files (will include
     *                      node_modules, so specify directories in necessary)
     * - `false`: disable in all cases
     *
     * @default false
     */
    refTransform?: boolean | string | RegExp | (string | RegExp)[];
    /**
     * @deprecated the plugin now auto-detects whether it's being invoked for ssr.
     */
    ssr?: boolean;
}

export declare function parseVueRequest(id: string): {
    filename: string;
    query: VueQuery;
};

export declare interface ResolvedOptions extends Options {
    root: string;
    sourceMap: boolean;
    devServer?: ViteDevServer;
}

declare function vuePlugin(rawOptions?: Options): Plugin_2;
export default vuePlugin;

export declare interface VueQuery {
    vue?: boolean;
    src?: boolean;
    type?: 'script' | 'template' | 'style' | 'custom';
    index?: number;
    lang?: string;
    raw?: boolean;
}

export { }
