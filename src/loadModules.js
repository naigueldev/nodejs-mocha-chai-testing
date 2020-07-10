const {
    asClass, asValue, createContainer, Lifetime,
} = require('awilix');

const container = createContainer();
const cwd = `${process.cwd()}/src/app/`;
container.loadModules([
    'controllers/**/*.js',
    'repositories/*.js',
    'services/**/*.js',
], {
    cwd,
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SINGLETON,
        register: asClass,
    },
});

container.loadModules([
    'models/*.js',
], {
    cwd,
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SINGLETON,
        register: asValue,
    },
});

module.exports = container;
