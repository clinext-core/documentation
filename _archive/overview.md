---
sidebar_position: 1
---

# Overview

:::info
CliNext is still experimental and its api may change in the future.
:::

![logo](/img/icon.png)

**CliNext** is a Node JS framework built for features running on your framework engine of choice. It provides a concise, easy to use and scalable template to get the best of features.

The CliNext framework at its core is a server template that uses the @clinext/server to launch the different features applied to models and executed on the framework engine. 

Main features:
- Quick start and Plug & Play Node JS framework
- Tailored for features
- Schema based models and auto-migration 

## Features
CliNext streamlines the server development by separating every "groupable" logic to be a feature, so that it is organically extracted from the base code and possibly migrated into its own package. By doing so, CliNext enforces a clear separation of concerns pattern out of the box. 

Just like a docker image is made to be platform agnostic, a feature is designed to be independant from the current environment it's being used in. A feature might depend on other features, but it does not need to know which application it is used for, or call any of its API.

The CliNext object acts as a central orchestrator. It holds references to objects every feature can access (for example the current express app, the Parse Server instance, etc). It can also be used to register special methods provided by features and that might be used by other features, without knowing the source feature of the method. For example, an emailable feature if declared in a CliNextApp object will register its implementation of a **sendWithTemplate** method in CliNext.Emailing. This API will be used by other features to send emails by following its specific specification.

[Read the features guide here](../features/anatomy.md)

## Examples of features
### Followable
- Gives an object (followed) the capacity to be followed by another object (follower) 
- keeps the number of followers up to date on the followed object
- creates and maintains join tables with the status of the follow relationship

<!-- [Read more](../featuresLibrary/followable/) -->

### Emailable
- Gives a CliNextApp the capacity to use transactional emails via a simple API that is registered via the CliNext.Mailing object
- Keeps a list of email templates
- Can be used with Sendgrid as of now

<!-- [Read more](../featuresLibrary/emailable/) -->

**...you love Parse Server**
There is no reason not to use CliNext if you have previously used a Parse Server. 

**...you care about productivity and developer experience**
CliNext provides a predetermined template that sets a clear developer's guideline 

## CliNext in your stack
CliNext comes bundled with Parse Server that sets up a working set of tables that handle users, sessions and installation. You can use it to bootstrap your platform or as a microservice that you can access through REST or GraphQL without using the _User, Session and installation tables.
