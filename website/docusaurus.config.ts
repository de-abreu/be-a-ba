import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'O Bê-á-bá do FPGA',
    tagline: 'Práticas na construção de um processador digital',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://de-abreu.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/be-a-ba/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'de-abreu', // Usually your GitHub org/user name.
    projectName: 'be-a-ba', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'pt-br',
        locales: ['pt-br', 'en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/de-abreu/be-a-ba/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/de-abreu/be-a-ba/edit/main/website/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'O Bê-á-bá do FPGA',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    label: 'Sobre',
                    to: '/docs/category/sobre'
                },
                {
                    label: 'Ambiente de Trabalho',
                    to: '/docs/category/ambiente-de-trabalho'
                },
                {
                    label: 'Lógica Combinacional',
                    to: '/docs/category/lógica-combinacional'
                },
                {
                    label: 'Lógica Sequencial',
                    to: '/docs/category/lógica-sequencial'
                },
                {
                    label: 'Processador Digital',
                    to: '/docs/category/o-processador-digital'
                },
                {
                    label: 'Bibliografia',
                    to: '/docs/bibliografia'
                },
                { to: '/blog', label: 'Blog', position: 'right' },
                {
                    href: 'https://github.com/de-abreu/be-a-ba',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right'
                }
            ],
        },
        footer: {
            style: 'dark',
            copyright: `CC-BY-NC-SA ${new Date().getFullYear()}. Feito com Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.oneDark,
            additionalLanguages: ['vhdl', 'makefile']
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
