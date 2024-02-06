---
sidebar_position: 10
---

# Schema

CliNext takes the separation of concerns to the extreme by allowing every feature to define a schema it needs to run. This schema has two main entries:
- target: how does the feature change the targetted model's schema, ie, which field to add
- managed: the models the feature needs to run

## Final schema
At runtime the CliNext server computes the total schema for the whole app based on the multiple features that are called.