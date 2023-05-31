module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@store': './src/store',
          '@routes': './src/routes',
          '@lib': './src/lib',
        },
      },
      '@babel/plugin-proposal-export-namespace-from',
    ],
  ],
};
