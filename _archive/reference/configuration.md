---
sidebar_position: 3
---

# Configurations
CliNext launches with a given configuration. When you generate a new CliNext project a list of configurations is provided in clinext.engine.config.js.

## Staging configuration
:::warning
This configuration is still experimental
:::
A staging configuration is helpful when you want to test a schema migration on a staging database without touching the production database. It is an extra protection you can put in your production code.

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#fff',
      'primaryTextColor': '#323232',
      'primaryBorderColor': '#323232',
      'lineColor': '#323232',
      'fontFamily': 'Space Grotesk'
    }
  }
}%%
flowchart TD
    start([Launch CliNext]) --> requiresMigration{A feature requires migration?} 
    requiresMigration -- Yes --> migrate[Migrate every feature that requires migration]
    requiresMigration -- No --> doLaunch[Do Launch]
    migrate --> doLaunch[Do Launch]
```

## Production configuration
A production configuration will handle the whole lifecycle of a CliNext, including migrations, running it and exposing the API. 