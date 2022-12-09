INSERT INTO department( id, name )
VALUES (01, "Enchanting"),
       (02, "Alchemic Instruments"),
       (03, "Apothecary"),
       (04, "Books Spells & Potion Recipes"),
       (05, "Magical Study Supplies"),
       (06, "Magical Creatures");

INSERT INTO role( id, title, salary, department_id )
VALUES ( 01, "Enchantment Manager", 70000 , 01),
       ( 02, "Enchanting Assistant", 34000 , 01),
       ( 03, "Alchemy Manager", 42000 , 02),
       ( 04, "Alchemist", 26000.00 , 02),
       ( 05, "Apothecary Manager", 40000 , 03),
       ( 06, "Pharmacist", 24000 , 03),
       ( 07, "Library Manager", 34000 , 04),
       ( 08, "Librarian", 25000 , 04),
       ( 09, "Wizard", 60000 , 05),
       ( 10, "Wizard's Assistant", 44000 , 05),
       ( 11, "Menagerie Manager", 50000 , 06),
       ( 12, "Creature Caretaker", 34000 , 06);

INSERT INTO employee( id, first_name, last_name, role_id, manager_id)
VALUES ( 01, "Seth", "Sorenson", 12, 04),
       ( 02, "Kendra", "Sorenson", 02, 07),
       ( 03, "Tanugatoa", "Dufu", 03, null),
       ( 04, "Vanessa", "Santoro", 11, null),
       ( 05, "Agad", "of Wyrmroost", 09, null),
       ( 06, "Warren", "Burgess", 10, 05),
       ( 07, "Bracken", "the Unicorn", 01, null),
       ( 08, "Ruth", "Sorenson", 07, null),
       ( 09, "Stan", "Sorenson", 05, null),
       ( 10, "Muriel", "Taggert", 06, 09),
       ( 11, "Gavin", "Rose", 04, 03),
       ( 12, "Dale", "Burgess", 08, 08);