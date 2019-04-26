# pg_dump -U root -h localhost playground2
--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2 (Debian 11.2-1.pgdg90+1)
-- Dumped by pg_dump version 11.2 (Debian 11.2-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: coffeeshop; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.coffeeshop (
    id integer NOT NULL,
    name text NOT NULL,
    city text NOT NULL
);


ALTER TABLE public.coffeeshop OWNER TO root;

--
-- Name: coffeeshop_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.coffeeshop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coffeeshop_id_seq OWNER TO root;

--
-- Name: coffeeshop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.coffeeshop_id_seq OWNED BY public.coffeeshop.id;


--
-- Name: income; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.income (
    incomeid integer NOT NULL,
    year integer NOT NULL,
    month integer NOT NULL,
    revenue integer NOT NULL,
    coffeeshopid integer
);


ALTER TABLE public.income OWNER TO root;

--
-- Name: income_incomeid_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.income_incomeid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.income_incomeid_seq OWNER TO root;

--
-- Name: income_incomeid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.income_incomeid_seq OWNED BY public.income.incomeid;


--
-- Name: review; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.review (
    reviewid integer NOT NULL,
    date timestamp with time zone,
    rating integer,
    comments text NOT NULL,
    coffeeshopid integer
);


ALTER TABLE public.review OWNER TO root;

--
-- Name: review_reviewid_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.review_reviewid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.review_reviewid_seq OWNER TO root;

--
-- Name: review_reviewid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.review_reviewid_seq OWNED BY public.review.reviewid;


--
-- Name: coffeeshop id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.coffeeshop ALTER COLUMN id SET DEFAULT nextval('public.coffeeshop_id_seq'::regclass);


--
-- Name: income incomeid; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.income ALTER COLUMN incomeid SET DEFAULT nextval('public.income_incomeid_seq'::regclass);


--
-- Name: review reviewid; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.review ALTER COLUMN reviewid SET DEFAULT nextval('public.review_reviewid_seq'::regclass);


--
-- Data for Name: coffeeshop; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.coffeeshop (id, name, city) FROM stdin;
\.


--
-- Data for Name: income; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.income (incomeid, year, month, revenue, coffeeshopid) FROM stdin;
\.


--
-- Data for Name: review; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.review (reviewid, date, rating, comments, coffeeshopid) FROM stdin;
\.


--
-- Name: coffeeshop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.coffeeshop_id_seq', 1, false);


--
-- Name: income_incomeid_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.income_incomeid_seq', 1, false);


--
-- Name: review_reviewid_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.review_reviewid_seq', 1, false);


--
-- Name: coffeeshop coffeeshop_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.coffeeshop
    ADD CONSTRAINT coffeeshop_pkey PRIMARY KEY (id);


--
-- Name: income income_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.income
    ADD CONSTRAINT income_pkey PRIMARY KEY (incomeid);


--
-- Name: review review_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_pkey PRIMARY KEY (reviewid);


--
-- Name: review constraint_coffeeshopid; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT constraint_coffeeshopid FOREIGN KEY (coffeeshopid) REFERENCES public.coffeeshop(id);


--
-- Name: income constraint_coffeeshopid; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.income
    ADD CONSTRAINT constraint_coffeeshopid FOREIGN KEY (coffeeshopid) REFERENCES public.coffeeshop(id);


--
-- PostgreSQL database dump complete
--
