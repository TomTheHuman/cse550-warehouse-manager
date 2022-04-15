-- Initial Configuration
USE DevDB;
GO
SET QUOTED_IDENTIFIER ON;
GO
SET ANSI_NULLS ON
GO

-- Seed Users
INSERT INTO AspNetUsers (Id, UserName, FirstName, LastName, PasswordHash, AccountType, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount)
VALUES
	(1, 'asecor', 'Alex', 'Secor', 'asecor', 'admin', 0, 0, 0, 0, 0),
	(2, 'ngittings', 'Nicholas', 'Gittings', 'ngittings', 'admin', 0, 0, 0, 0, 0),
	(3, 'tshaw', 'Thomas', 'Shaw', 'tshaw', 'admin', 0, 0, 0, 0, 0),
	(4, 'xmo', 'Xiafang', 'Mo', 'xmo', 'admin', 0, 0, 0, 0, 0),
	(5, 'spatel', 'Saurin', 'Patel', 'spatel', 'admin', 0, 0, 0, 0, 0),
	(6, 'admin1', 'Test', 'Admin', 'admin1', 'admin', 0, 0, 0, 0, 0),
	(7, 'user1', 'Test', 'User', 'user1', 'user', 0, 0, 0, 0, 0);
GO

-- Seed Locations
INSERT INTO Locations (Id, ImageURL)
VALUES
	('A1', '/map-a1.png'),
	('A2', '/map-a2.png'),
	('A3', '/map-a3.png'),
	('A4', '/map-a4.png'),
	('A5', '/map-a5.png');
GO

-- Seed Inventory Items
INSERT INTO InventoryItems (Description, Manufacturer, QuantityInStock, QuantityOnOrder, LocationId)
VALUES
	('Item 1', 'ACME Inc.', '5', '10', 'A1'),
	('Item 2', 'Acme Inc.', '6', '12', 'A2'),
	('Item 3', 'Acme Inc.', '7', '14', 'A3'),
	('Item 4', 'Acme Inc.', '8', '16', 'A4'),
	('Item 5', 'Acme Inc.', '9', '18', 'A5');
GO

-- Seed Suppliers
INSERT INTO Suppliers (Name)
VALUES
	('Test Supplier 1'),
	('Test Supplier 2'),
	('Test Supplier 3'),
	('Test Supplier 4'),
	('Test Supplier 5');
GO

-- Seed Orders
INSERT INTO Orders (SupplierId, OrderType, CreatedDate, Status, CompletedDate, CompletedById)
VALUES
	(1, 'Incoming', '20220101 00:00:00 AM', 'Open', null, null),
	(1, 'Outgoing', '20220101 00:00:00 AM', 'Completed', '20220110 00:00:00 AM', 1),
	(2, 'Incoming', '20220202 00:00:00 AM', 'Completed', '20220210 00:00:00 AM', 2),
	(2, 'Outgoing', '20220202 00:00:00 AM', 'Open', null, null),
	(3, 'Incoming', '20220303 00:00:00 AM', 'Open', null, null),
	(3, 'Outgoing', '20220303 00:00:00 AM', 'Completed', '20220310 00:00:00 AM', 3),
	(4, 'Incoming', '20220404 00:00:00 AM', 'Completed', '20220410 00:00:00 AM', 4),
	(4, 'Outgoing', '20220404 00:00:00 AM', 'Open', null, null);
GO

