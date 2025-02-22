
usual approach: 1st example is proof I can do something, contains minimal amount of elements without being trivial. 

2nd tutorial demonstrates NOT the best way to connect to a SQL DB (directly). this is an intermediary approach. https://www.bezkoder.com/node-js-rest-api-express-mysql/ 
the main thing to understand is that there are #layers:
1) routes
2) controller
3) DB

Columns are fields of a class. e.g. Person has ID(int), Name(String), Address(String)
this is a reflection of DB structure in an object. 
	this is the preferred approach. 

#cors: allows to call different addresses for API for address from which it was loaded from 

bezcoder = [b{i}zcoder]

"you wrote some code, very nice, now does it work?"

mornings are for troubleshooting 
**troubleshooting** 1: ==create separate directories for q project==
node modules are per project, include q project 

"two directories deep, two levels deep" 

.gitignore is recursive, one on top applies to all sublevels 

want to open 2 or more projects? open 2 or more VSC instances

**troubleshooting** 2: schema not showing in mysql workbench
1) create DB
2) create user
3) give user permissions to DB 
shortcut: provide root credentials. ok for local host acivity. 
user: root password: empty 

for a real project, create a user and give permission for db 

the PHP online workbench is more used than other workbenches

![[Pasted image 20250212093836.png]]

third step has been done...then why is it not working? 

![[Pasted image 20250212093944.png]]

tried flushing, and tried not flushing...doesn't work.
![[Pasted image 20250212094454.png]]

testing connection. 
![[Pasted image 20250212094504.png]]

connection denied. 

((we all work on tutorial #2))
==BREAK==
((we all work on tutorial #2))

CPM: copy-paste-modify 

homework:

![[Pasted image 20250212123051.png]]

windows uses UTF-16 internally
utf-8 is sufficient everywhere nowadays. 
dynamic nature, can express any character. 

randomly generated password, don't use any personal passwords for any technical assignments!
that's why we need a user in this day01 assignment 

Dr. Gregory prefers thisCase
Dot.net = every word is capitalized 

AI = autoincrement 

SQL doesn't automatically assign ID, depends on what you're using, there's no standard

ENUM in DB! not in JS

database, folder, user all named the same, day02todos

![[Pasted image 20250212123919.png]]

will become SQL queries

we can do JSON, binary, whatever inside the API call
binary is useful for images 

![[Pasted image 20250212123952.png]]
we should have it for everything normally 

DRY and single responsibility. modularity. 

![[Pasted image 20250212124058.png]]

because is assigned by POST. 
eventually, you can make a DB where ID is assigned by client, doesn't violate RESTful rules. 
normally, ID are immutable and unique. 
most IDs are 64bit in most DB.

day04 is super cool for regexes
will be asked on midterm + https://sequelize.org/ 

IRL validation is done **twice** because we need it on server side and client side 
![[Pasted image 20250212124521.png]]

validation to be done on server side + error code
![[Pasted image 20250212124539.png]]
![[Pasted image 20250212124832.png]]
it's nice to show what's missing to the client, send the reason to client 

DO NOT USE DB ERRORS as a way of validating things 

here, in this assignment, we will not have an unique index

make sure user name is not used yet, and only THEN attempt an insert. 
provide data to DB that you believe is correct. do not rely on DB to be a validator. 

![[Pasted image 20250212124846.png]]

1) install program
2) log any error into the library (also print them on console for debugging)

we can still catch exceptions. print info on screen, and write to log file. 

# Error severity level: 
1) info
2) debug
3) warning
4) error
5) fatal

there is filter in library config: e.g. I only want to write warnings or worse! 
IRL, for troubleshooting, you can set log to receive everything, and when everything is fixed, reset the receptivity to "only error and above", etc.




























