---
sidebar_position: 0
---

# Overview

:::info
CliNext is still experimental and its api may change in the future.
:::

![logo](/img/icon_xs.svg)

**CliNext** is a Node JS framework built for features running on your framework engine of choice. It provides a concise, easy to use and scalable template to get the best of features.

The CliNext framework at its core is a server template that uses the @clinext/server to launch the different features applied to models and executed on the framework engine. 

Main features:
- Quick start and Plug & Play Node JS framework
- Tailored for features
- Schema based models and auto-migration 

## Features
CliNext streamlines the server development by separating every "groupable" logic to be a feature, so that it is organically extracted from the base code and possibly migrated into its own package. By doing so, CliNext enforces a clear separation of concerns pattern out of the box. 

Just like a docker image is made to be platform agnostic, a feature is designed to be independant from the current environment it's being used in. A feature might depend on other features, but it does not need to know which application it is used for, or call any of its API.

The CliNext object acts as a central orchestrator. It holds references to objects every feature can access (for example the current express app, the Parse Server instance, etc). It can also be used to register special methods provided by features and that might be used by other features via Services.

