CREATE DATABASE Real_Estate_Analysis_db

CREATE TABLE employment (
	year INTEGER NOT NULL,
	month_code VARCHAR(3) NOT NULL,
	month_name	VARCHAR(10) NOT NULL,
	unemployment_rate FLOAT NOT NULL,
	hourly_rate FLOAT,
	month_year VARCHAR(60) NOT NULL
	);
	
CREATE TABLE real_estate_sales (
	region VARCHAR NOT NULL,
	month_year VARCHAR,
	region_type VARCHAR(10),
	state_code VARCHAR(2),
	last_updated VARCHAR,
	state_name VARCHAR(30),
	active_listings INTEGER,
	active_listings_yoy VARCHAR,
	homes_sold INTEGER,
	homes_sold_yoy VARCHAR,
	homes_inventory INTEGER,
	homes_inventory_yoy VARCHAR,
	median_dom INTEGER,
	median_dom_yoy VARCHAR,
	median_sale_price INTEGER,
	median_sale_price_yoy VARCHAR,
	months_of_supply INTEGER,
	months_of_supply_yoy VARCHAR,
	new_listings INTEGER,
	new_listings_yoy VARCHAR,
	pending_sales INTEGER,
	pending_sales_yoy VARCHAR,
	region_type_id INTEGER,
	month VARCHAR(10) NOT NULL,
	year VARCHAR(4) NOT NULL,
	month_code VARCHAR(4) NOT NULL,
	month_year_code INTEGER
	);

CREATE TABLE covid_closed_states (
	state_id VARCHAR(2) NOT NULL,
	policy_type VARCHAR NOT NULL,
	start_date DATE NOT NULL,
	stop_date DATE NOT NULL,
	start_month INTEGER NOT NULL,
	stop_month INTEGER NOT NULL
);

SELECT * FROM employment;
SELECT * FROM real_estate_sales;
SELECT * FROM covid_closed_states;