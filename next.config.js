const isGithub =
  process.env.GITHUB_ACTIONS || process.env.GITHUB_PAGES || false;

console.log('\nIS GITHUB??\n', isGithub);
if (isGithub) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  console.log('\n\nREPO ????\n\n', repo);

  assetPrefix = `/${repo}/`;
  console.log('\n\nASSET PREFIX ????\n\n', assetPrefix);
  basePath = `/${repo}`;
  console.log('\n\nBASEPATH ????\n\n', basePath);
}
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = isGithub
  ? {
      basePath: '',
      output: 'export',
      images: { unoptimized: true },
    }
  : { output: 'export', images: { unoptimized: true } };

module.exports = nextConfig;
