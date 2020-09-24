-- added minimum length check for password
CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL CHECK (LENGTH(password) > 2),
    admin boolean DEFAULT false
);

