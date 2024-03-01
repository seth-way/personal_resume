/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  console.log('\n\nREPO ????\n\n', repo);

  assetPrefix = `/${repo}/`;
  console.log('\n\nASSET PREFIX ????\n\n', assetPrefix);
  basePath = `/${repo}`;
  console.log('\n\nBASEPATH ????\n\n', basePath);
}

const nextConfig = isGithubActions
  ? { basePath: basePath, output: 'export', images: { unoptimized: true } }
  : { output: 'export', images: { unoptimized: true } };

export default nextConfig;
