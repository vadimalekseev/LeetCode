SELECT Name "Customers" from Customers c
WHERE c.Id NOT IN (SELECT CustomerId FROM Orders)
