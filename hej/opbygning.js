
customer customers      
//Det er alle kunde 
/customers     
//Kunde med id nr. 11
/customers/11
//Alle ordrer for customer med id nr. 11
/customers/11/orders
//Order med id 4 til customer med id nr. 11
/customers/11/orders/4
//Alle ordrer linjer til ordrer nr. 4 til kunde med id 11
/customers/11/orders/4/order_lines
//Ordrerlinje med id 457 på ordrer med id 4 på kunde med id 11
/customers/11/orders/4/order_lines/457

//Alle ordrer på tværs af kunder (til os)
/orders
//Gå ind og se ordrer nr. 4
/orders/4

/orders/4/order_lines
//
/orders/4/order_lines/457

GET
	//Ny kunde
	new     /customers/new
	//Ny ordre på kunden. 
	new 	/customers/22/orders/new
	//redigere en kunde
	edit	/customers/22/edit
	//redigere en ordre
	edit 	/customers/22/orders/52/edit 

	//Index er hvor man ser alle poster(records)
	index   /customers
		s   

POST
	create	/customers

	create  /customers/52/orders

	update  /customers/52

	update  /customers/52/orders/12/order_lines/123

	delete  /customers/52      {_method:'delete'}






