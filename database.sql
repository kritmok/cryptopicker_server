CREATE DATABASE cryptopicker;

-- add extension 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--set schema 

--users 
CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4(),
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

--fake user data 
INSERT INTO users (user_email, user_password) VALUES ('henryly213@gmail.com', 'kthl8822');

--watchlist Items 
CREATE TABLE items(
    item_id SERIAL,
    user_id UUID,
    item_uuid UUID,
    PRIMARY KEY (item_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- fake item data 
INSERT INTO items (user_id, item_uuid) VALUES ('f99f921e-67d7-4da2-b44e-41407bddb5f3', '69ba01f8-08a9-11ed-861d-0242ac120002');



--change the table to store name instead of uuid 
CREATE TABLE coins(
    coin_id SERIAL,
    user_id UUID,
    coin_name VARCHAR,
    PRIMARY KEY (coin_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- fake item data 
INSERT INTO coins (user_id, coin_name) VALUES ('f99f921e-67d7-4da2-b44e-41407bddb5f3', 'apple coin');



