-- TODO: Create a table:
--the id represents each entry uniquely (=unique identifier)-- SQL id values are UNIQUE; meaning if a row is deleted, that id is gone forever
-- our table needs to know what data types we are storing --> constraint:
-- hence the data types e.g. INT/TEXT/VARCHAR/etc.
CREATE TABLE inventory (  
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  item_name VARCHAR(255),
  date_added DATE DEFAULT current_date,
  quantity INT,
  unit_size INT,
  unit_type VARCHAR(255),
  category VARCHAR(255),
  subcategory VARCHAR(255), 
  storage_location VARCHAR(255),
  expiry_date DATE,
  comments TEXT
);

-- TODO: Add an entry
INSERT INTO inventory (item_name, quantity, unit_size, unit_type, category, subcategory, storage_location, expiry_date, comments) VALUES 
('testItem', 10, 1, 'L', 'beverages', 'can drinks', 'pantry', '2027-12-01', 'testComment')

-- above translated into generic code for JS use
`INSERT INTO inventory (item_name, quantity, unit_size, unit_type, category, subcategory, storage_location, expiry_date, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
[addStock.col1, addStock.col2, addStock.col3, addStock.col4, addStock.col5, addStock.col6, addStock.col7, addStock.col8, addStock.col9] -- generic for your ease of use for now 
