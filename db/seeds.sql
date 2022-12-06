INSERT INTO department( id, name )
VALUES (01, "Enchanting"),
       (02, "Alchemic Instruments"),
       (03, "Apothecary"),
       (04, "Books Spells & Potion Recipes"),
       (05, "Magical Study Supplies"),
       (06, "Magical Creatures");

INSERT INTO role( id, title, salary, department_id )
VALUES ( 001, "Enchantment Manager", 70000 , 01),
       ( 002, "Enchanting Assistant", 34000 , 01),
       ( 003, "Alchemy Manager", 42000 , 02),
       ( 004, "Alchemist", 26000.00 , 02),
       ( 005, "Apothecary Manager", 40000 , 03),
       ( 006, "Pharmacist", 24000 , 03),
       ( 007, "Library Manager", 34000 , 04),
       ( 008, "Librarian", 25000 , 04),
       ( 009, "Wizard", 60000 , 05),
       ( 010, "Wizard's Assistant", 44000 , 05),
       ( 011, "Menagerie Manager", 50000 , 06),
       ( 012, "Creature Caretaker", 34000 , 06);

INSERT INTO employee( id, first_name, last_name, role_id, manager_id)
VALUES ( 0001, "Seth", "Sorenson", 012, 00),
       ( 0002, "Kendra", "Sorenson", 002, 00),
       ( 0003, "Tanugatoa", "Dufu", 003, null),
       ( 0004, "Vanessa", "Santoro", 011, null),
       ( 0005, "Agad", "of Wyrmroost", 009, null),
       ( 0006, "Warren", "Burgess", 010, 0005),
       ( 0007, "Bracken", "the Unicorn", 001, null),
       ( 0008, "Ruth", "Sorenson", 007, null),
       ( 0009, "Stan", "Sorenson", 005, null),
       ( 0010, "Muriel", "Taggert", 006, 00),
       ( 0011, "Gavin", "Rose", 004, 00),
       ( 0012, "Dale", "Burgess", 008, 00);