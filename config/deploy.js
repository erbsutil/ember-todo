module.exports = function (deployTarget) {
  var ENV = {};

  if (deployTarget === 'production') {
    ENV.ghpages = {
      gitRemoteUrl: 'https://github.com/ericksutil/ember-todo',
      commitMessage: 'Proudly deployed by: ember-cli-deploy-ghpages',
      gitRemoteName: 'origin',
      gitBranch: 'gh-pages'
    }

    ENV.pipeline = {
      activateOnDeploy: true
    }
  }

  return ENV;
};
