# BUGS

- BUG #1: register allows no data in any field to create a user (no validation)

- BUG #2: cannot login as admin,  always defaults  to false

- BUG #3: can log in without entering a password
- BUG #3.5  => if the user tries to GET/users it results in unhandled promise rejection, breaking the test GET/users tests
- BUG #3 part 2 - users can login with wrong password

- BUG #4 a user cannot patch their own data

- BUG #6 (given in assignment) to check authUser.
