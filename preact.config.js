export default (config, env, helpers) => {
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  let babelConfig = rule.options;
  babelConfig.plugins.push('jsx-control-statements');
  babelConfig.plugins.push('transform-class-properties');
};