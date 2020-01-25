--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Orders" (
    product_name character varying(50),
    product_id character varying(50),
    number_of_items character varying(50),
    order_id character varying(50),
    date_time character varying(50),
    status character varying(100),
    total_amount double precision,
    mobile_number character varying(50),
    gst_pin character varying(50)
);


ALTER TABLE public."Orders" OWNER TO postgres;

--
-- Name: Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Products" (
    product_name character varying(50),
    product_id character varying(50),
    stock_status character varying(50),
    est_delivery character varying(50),
    piece character varying(50),
    description character varying(100),
    price character varying(50),
    discount character varying(50),
    image_folder character varying(50),
    category character varying(50),
    return_accepted character varying(50)
);


ALTER TABLE public."Products" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    user_name character varying(50),
    email_id character varying(50),
    mobile_number character varying(50),
    gst_pin character varying(50),
    card_number character varying(50),
    address character varying(100),
    credits_earned character varying(20),
    user_password character varying(50)
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: TABLE "Users"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public."Users" IS 'Table to accommodate user related data';


--
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Orders" (product_name, product_id, number_of_items, order_id, date_time, status, total_amount, mobile_number, gst_pin) FROM stdin;
CricketBat	SS1TON	2	Order0001	07122019	Ordered	5000	8220713715	\N
CricketBat	SS1TON	2	Order0001	07122019	Ordered	5000	8220713715	\N
SSTon	CRICBATSSTON	1	ORDER0001	08122019	Cancel	5000	8220713715	\N
SSTon	CRICBATSSTON	1	ORDER0001	08122019	Cancel	5000	8220713715	\N
SSTon	CRICBATSSTON	1	ORDER0001	08122019	Cancel	5000	8220713715	\N
\.


--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Products" (product_name, product_id, stock_status, est_delivery, piece, description, price, discount, image_folder, category, return_accepted) FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (user_name, email_id, mobile_number, gst_pin, card_number, address, credits_earned, user_password) FROM stdin;
Bharath	bharathmail007@gmail.com	8220713715	GST123	32302948904328	Madurai	50	password
Bharath	bharathmail007@gmail.com	8220713715	GST123	32302948904328	Madurai	50	password
Bharath	bharathmail007@gmail.com	#8220713715	GST123	34249287340	Madurai	50	password
Bharath	bharathmail007@gmail.com	#8220713715	GST123	34249287340	Madurai	50	password
Bharath	bharathmail007@gmail.com	#8220713715	GST123	34249287340	Madurai	50	password
Bharath	bharathmail007@gmail.com	#8220713715	GST123	34249287340	Madurai	50	password
\.


--
-- PostgreSQL database dump complete
--

