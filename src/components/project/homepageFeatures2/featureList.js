import React from 'react';

export default [
  {
    title: 'Validators',
    Svg: require('@site/static/img/noun-bee-4883469.svg').default,
    description: (
      <>
        When features need to communicate the CliNext.Services namespace is ready for inter-feature communication. Any feature can register an api associated with a unique ID that can be called with no knowledge of the feature that handles the operation.
      </>
    ),
  },
  {
    title: 'Transformers',
    Svg: require('@site/static/img/noun-seed-4962548.svg').default,
    description: (
      <>
        CliNext Automatic Seed is an easy way to seed CliNext models. It was built from the ground up to respect the feature lifecycle and separation of concerns. Every feature can define config entries that drive its behaviour at runtime, including the app feature.
      </>
    ),
  },

  {
    title: 'Side effects',
    Svg: require('@site/static/img/noun-settings-1269041.svg').default,
    description: (
      <>
        CliNext config adds the ability to change the behaviour and appearance of your CliNext app without  redeploying your server or requiring users to update their app.
        Every feature can manage its own configuration.
      </>
    ),
  },
]
