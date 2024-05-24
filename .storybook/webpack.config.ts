import webpack from 'webpack';
import { BuildPaths } from '../config/build/types/config';
import path from 'path';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', 'tsx');

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
