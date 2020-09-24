/*
 * Copyright © Bold Brand Commerce Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
import { join } from 'path';
import { existsSync, ensureDir } from 'fs-extra';
import { prepareSymlinks, getConfigs } from '../helpers/tools';
import { DIRECTORIES } from '../helpers/constants';

/**
* Created symlinks for npm modules
* @async
* @function symlinksCreator
* @param {Object} options - Module options
* @param {Object} options.modules - Main modules
* @param {string} options.vendorDir - Temporary node modules directory (symlinks)
* @param {string} options.nodeModulesDir - Directory to find npm modules
* @returns {Promise<string>}
*/
async function symlinksCreator({
    modules: {
        npm: npmModules,
    },
    vendorDir,
    nodeModulesDir,
}) {
    await ensureDir(vendorDir, 0o2775); // Ensure vendor directory exists
    await Promise.all(prepareSymlinks({ npmModules, vendorDir, nodeModulesDir }));

    return 'Symlinks created';
}

/**
* Check main directories
* @async
* @function checkDirectories
* @param {Object} options - Module options
* @param {Object} options.modules - All active modules
* @param {string} options.modulesDir - Main modules directory
* @param {string} options.vendorDir - Temporary node modules directory (symlinks)
* @throws {string} Will throw an error if required main directories not exist
* @returns {Promise<string>}
*/
function checkDirectories({ modules, modulesDir, vendorDir }) {
    return new Promise((resolve, reject) => {
        const isModuleDir = existsSync(modulesDir);
        const isVendorDir = existsSync(vendorDir);

        if (modules.local && modules.local.length && !isModuleDir) {
            reject(new Error(`Local modules directory [${modulesDir}] does not exist.`));
        }
        if (modules.npm && modules.npm.length && !isVendorDir) {
            reject(new Error(`Vendor directory [${vendorDir}] does not exist.`));
        }
        resolve('Directories checked');
    });
}

/**
* Check required modules
* @function checkRequiredModules
* @param {Object} options - Module options
* @param {Object} options.modules - All active modules
* @param {string[]} options.required - Required modules
* @throws {string} Will throw an error if required module not exist
* @returns {Promise<string>}
*/
function checkRequiredModules({ allModules, required }) {
    return new Promise((resolve, reject) => {
        required.forEach((module) => {
            if (!allModules.some(e => e.name === module)) {
                reject(new Error(`Required module [${module}] does not exist.`));
            }
        });
        resolve('All required modules exist');
    });
}

/**
* Get module configuration
* @async
* @function getModulesConfiguration
* @param {Object} options - Module options
* @param {Object} options.allModules - All active modules
* @returns {Promise<Object[]>} All modules configurations
*/
function getModulesConfiguration({ allModules, directories }) {
    const configDir = directories.config || DIRECTORIES.config;

    return Promise.all(getConfigs({ modules: allModules, suffix: `${configDir}/index.js` }));
}

/**
* Check modules relations
* @function checkModulesRelations
* @param {Object[]} configs - All modules configurations
* @throws {string} Will throw an error if relations are incorrect
* @returns {Promise<string>}
*/
function checkModulesRelations(configs) {
    return new Promise((resolve) => {
        configs.forEach((config) => {
            if (config.relations) {
                config.relations.forEach((relation) => {
                    if (relation && !configs.find(c => c.name === relation)) {
                        throw Error(`Module [${config.name}] has relation with [${relation}].\n Module [${relation}] does not exist.`);
                    }
                });
            }
        });
        resolve('All relations correct');
    });
}

/**
* Set aliases for modules
* @function setAliases
* @param {Object[]} configurations - All modules configurations
* @param {Object} options - Module options
* @param {string} options.allModules - All active modules
* @returns {Promise<string>}
*/
async function setAliases(configurations, { allModules }) {
    await this.extendBuild((config) => {
        const alias = config.resolve.alias || {};

        configurations.forEach((configuration) => {
            const { name } = configuration;

            if (configuration.aliases) {
                const { aliases } = configuration;

                Object.keys(aliases).forEach((key) => {
                    alias[key] = join(allModules.find(m => m.name === name).path, aliases[key]).replace(/\/$/g, '');
                });
            }

            if (configuration.replacements) {
                const { replacements } = configuration;

                Object.keys(replacements).forEach((key) => {
                    alias[key] = join(allModules.find(m => m.name === name).path, replacements[key]).replace(/\/$/g, '');
                });
            }
        });
    });

    return 'All aliases set';
}

/**
* Set plugins for modules
* @function setPlugins
* @param {Object[]} configurations - All modules configurations
* @param {Object} options - Module options
* @param {string} options.allModules - All active modules
* @returns {Promise<string>}
*/
async function setPlugins(configurations, { allModules }) {
    return new Promise((resolve) => {
        configurations.forEach((configuration) => {
            if (configuration.plugins) {
                const { name, plugins } = configuration;
                const moduleName = name.replace(/[^a-zA-Z]/g, '');

                plugins.forEach(async ({ ssr, src }) => {
                    const pluginPath = join(allModules.find(m => m.name === name).path, src).replace(/\/$/g, '');

                    await this.addPlugin({
                        src: `${pluginPath}.js`,
                        fileName: join('modules', moduleName, `${src}.js`),
                        ssr,
                    });
                });
            }
        });
        resolve('All plugins css set');
    });
}

/**
* Set global css for modules
* @function setCss
* @param {Object[]} configurations - All modules configurations
* @param {Object} options - Module options
* @param {string} options.allModules - All active modules
* @returns {Promise<string>}
*/
function setCss(configurations, { allModules }) {
    return new Promise((resolve) => {
        configurations.forEach((configuration) => {
            if (configuration.css) {
                const { name, css } = configuration;

                css.forEach((style) => {
                    this.options.css.push(join(allModules.find(m => m.name === name).path, style).replace(/\/$/g, ''));
                });
            }
        });
        resolve('All global css set');
    });
}

/**
* Run actions before any modules are loaded
* @function beforeAllModule
* @param {Object} moduleOptions - Module options
* @returns {Promise<Object>}
*/
export default async function beforeAllModule(moduleOptions) {
    const messages = {};

    if (moduleOptions.modules.npm && moduleOptions.modules.npm.length) {
        messages.symlinksCreator = await symlinksCreator(moduleOptions);
    }
    messages.checkDirectories = await checkDirectories(moduleOptions);
    messages.checkRequiredModules = await checkRequiredModules(moduleOptions);
    const modulesConfigs = await getModulesConfiguration(moduleOptions);

    messages.checkModulesRelations = await checkModulesRelations(modulesConfigs);
    messages.setAliases = await setAliases.call(this, modulesConfigs, moduleOptions);
    messages.setPlugins = await setPlugins.call(this, modulesConfigs, moduleOptions);
    messages.setCss = await setCss.call(this, modulesConfigs, moduleOptions);

    return {
        messages,
        modulesConfigs,
    };
}
