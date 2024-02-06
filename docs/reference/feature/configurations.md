---
sidebar_position: 4
---

# Config

## Concept
CliNext config adds the ability to change the behaviour and appearance of your CliNext app without  redeploying your server or requiring users to update their app. 
Parse Server Config is a simple way to set key values and to retrieve them from a client app. It's nevertheless not as complete as Firebase Remote Config for example. Thus CliNext Config adds feature based config with conditions and groups.

CliNext Config was built from the ground up to respect the feature lifecycle and separation of concerns. Every feature can define config entries that drive its behaviour at runtime, including the app feature. The config entries are defined along their conditions and groups in dedicated json files thus guaranteeing an environment agnostic deployment.

CliNext's unique manualable mechanism used for seeds (manualable feature) allows an hybrid config. You can define initial config entries in json files and manually add new configs or update existing live. Both the updated and new entries will keep their values while new entries in the json files will be taken into account.

### Entries

CliNext Config entries are 
- Data types

### Conditions

CliNext Config conditions are a set of rules that determine the actual config entry value a particular user will receive.

#### Types
- Installation


### Groups
CliNext Config groups are a way to organise a set of entries.


### Implementation path

1. Add config entries in you feature/config dedicated files: entries
2. Run / Deploy your CliNext app
3. 

### Policies and limits

Note the following policies:

- Don't use CliNext Config to make app updates that should require a user's authorization. This could cause your app to be perceived as untrustworthy.
- Don't store confidential data in Remote Config parameter keys or parameter values. It is possible to decode any parameter keys or values stored in the Remote Config settings for your project.
- Don't attempt to circumvent the requirements of your app's target platform using Remote Config.

Note the following limits:



### Roadmap

CliNext Dashboard will include a dedicated UI for config entries, conditions and groups manipulation.



Generator tasks
- Generate client side defaults

## Folder structure

```bash
├── models
│   ├── classA
│   │   │   ├── class
│   │   │   │   ├── index.js
│   │   │   │   ├── features.js
│   │   │   ├── functions
│   │   │   │   ├── index.js
│   │   │   ├── triggers
│   │   │   │   ├── index.js
```

- The **class** folder contains 
    - the es6 models handled by the feature.
    - the features declaration.
- The **functions** folder contains cloud functions specific to the class
- The **triggers** folder contains triggers functions

## Variant entry points
None

## Usage
### Declare a class

```js
export default class ClassA extends CliNext.App.Object {
    constructor() {
        super('ClassA')
    }
}
```
### Use features
```js
export default [
    //featureslist (see declaring features)
]
```

### Use functions
### Use triggers

## Example