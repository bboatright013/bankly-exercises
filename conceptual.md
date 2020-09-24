# Conceptual Exercise

## Answer the following questions below

- What is a JWT?
JWT is an achronym for json web tokens, which is an open standard method of sending data in requests

- What is the signature portion of the JWT?  What does it do?
the signature is the header and payload but signed with a secret key. It acts as the check on the header and payload to ensure that it has not been tampered with.

- If a JWT is intercepted, can the attacker see what's inside the payload?
yes, the payload is encoded, not encrypted

- How can you implement authentication with a JWT?  Describe how it works at a high level.
you can add tokens to users who login or register that travels with the user object and will pass into requests made by that user

- Compare and contrast unit, integration and end-to-end tests.
unit testing looks at a single component,  integration testing checks that a particular set of components flow correctly, end-to-end sees that from start to finish a user flow can be executed

- What is a mock? What are some things you would mock?
a mock is a function that takes the place of some other complex element necessary to the testing of a unit. Something that returns based off of user input or randomness are good to mock

- What is continuous integration?
continuous integration is the practice of merging in small code changes that get tested when pushed

- What is an environment variable and what are they used for?
environment variables are setup information that factor into how the program will run. it can determine where a database link points to or if it runs in test mode

- What is TDD? What are some benefits and drawbacks?
TDD is test driven development. It is the process of writing a test first, and then creating code that turns it green. Benefits are that testing for units are done early, the goal of the unit is well thought out, and late stage development wraps up quickly. Drawbacks include slower startup time and less coding more thinking in the begining.

- What is the value of using JSONSchema for validation?
JSONSchema removes alot of the one off coding required to validate user input

- What are some ways to decide which code to test?
if there are moving pieces or user input or validation or soemthing that effects the database. Basically anything that could derail and break the experience. more is better.

- What are some differences between Web Sockets and HTTP?
web sockets are stateful, allowing the browser to stay connected

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I enjoyed node more than flask. I definitely prefered the methodology of building out the routes and models in node as well as utlizing the OOP of the js objects.
