# Homework 3
## js-band-hw-task-3

> We had the audit of our PoC. And now we have few suggestions about our solution. First, it's better to create different types of transports by using Factory Method. Second, we need to prepare service for local storage as a Singleton and set prefix what will be added to the key name.


### Objectives
- Update your existing functionality by using Method factory
- Implement service for the local storage as Singleton

**Implemented:**
- The localStorage object is implemented using the singleton pattern.
- Forms were created using the factory pattern (this may not be rational or productive, but was done for practice)
- Creation of transport was realized with the help of factory pattern (there is some doubt that I really did exactly what I wanted)
- Application logic is built using modules
- Partially implemented MVC model
- The object key is prefixed with *"jsband"*

**The application can be checked at:** https://ruswc.github.io/js-band-hw-task-3/public/index.html