declare module 'astro:config' {
    import type {
        Siteconfig, MetaDataConfig, UIConfig, I18NConfig
    } from './config'

    export const SITE: Siteconfig;
    export const METADATA: MetaDataConfig;
    export const UI: UIConfig;
    export const I18N: I18NConfig;
}