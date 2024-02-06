
# FAQ 💡

![logo](/img/icon.svg)

<!-- ## CliNext -->

### How is CliNext different from other Node JS features?
CliNext is tailored for features which are a unique and opinionated way to model and develop a server. Other Node JS frameworks are either less structured or use other opinionated templates like controllers. 

### Should I learn Parse Server before I start using CliNext?
Yes! We highly recommend being familiar with Parse Server concepts before you use CliNext. We know this overhead is not perfect. We are working to integrate Parse Server's incredible features straight into CliNext and use a unified API in the future. We have made a quick guide to help you grasp the most important Parse Server concepts you need. Check it out if you're a Parse newbie ;)

<!-- ## Features -->

### Are features independant from each other?
We believe it is a healthy pattern to divide the development effort into capacities that overlap the least. During our developments we managed to refactor or create from scratch dozens of features and only in rare occasions did a feature need the capacity of another feature. For those use cases we thought about integrating an abstract API or a hook straight into the CliNext namespace, for example, the *followable* feature needs to send an email that is provided to the application by the *emailable* feature. The *emailable* feature will register its capacity to send emails to the CliNext object, and the *followable* feature will consume it without knowing the source feature.

### Can features collide?
Features can collide when they don't follow guidelines for naming. We recommend features to prefix the fields added 
Features can collide when they don't follow guidelines for naming. We recommend features to prefix the fields they add to object by a unique key, usually its the feature id itself or its slug if the id is too long. CliNext also enforces functions name separation by uppending the feature id or its slug to the functions declared by the feature.

### Can I use third party features?
We encourage developers to package their features and share them with the community, since features themselves are designed to be self sufficient and separated from the app code base and other features, it's super easy to make an npm package and publish it publicly or on an enterprise repository. 

### Why can't I modify the schema with the CliNext Dashboard?
The CliNext Dashboard allows us to change the app schema by default. Although this behaviour is handy for local projects and its quick of use, we chose to use a strictly JSON based schema storage and update for these reasons:
- Schema computation
- Schema migration
- Make the security more visible and mistakes more obvious
- Versioning

### Can I modify a feature
CliNext's api allows you to give parameters to a feature.
If these parameters are not enough for your use case, let's say you want to increase the security level of a feature's class, you can fork an existing feature onto the app's /features folder

```bash
yo clinext:forkfeature
```

### How do I add an express middleware to my app?
The *afterInit* method allows you manipulate the underlying express middleware when it has been initialized and ready. You can hook any middleware at this point.