
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL, 
    "first_name" VARCHAR (30) NOT NULL,
    "last_name" VARCHAR (30) NOT NULL,
    "phone" BIGINT,
    "email" VARCHAR(50) NOT NULL,
    "dob" DATE NOT NULL);
    


CREATE TABLE "form_data" (
    "id" SERIAL PRIMARY KEY,
    "gad_form_score" INT NOT NULL,
    "phq_form_score" INT NOT NULL,
    "reflections" VARCHAR (300) NOT NULL,
    "date_submitted" DATE NOT NULL);