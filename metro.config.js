const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  const assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
  const sourceExts = [...config.resolver.sourceExts, 'svg'];

  return {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...config.resolver,
      assetExts,
      sourceExts,
    },
  };
})();
