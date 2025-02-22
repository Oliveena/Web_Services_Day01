
Gregory did a PhD in McGill and is now consulting ++
teaches also Linux and Networking 

no multiple choice tests 

acknowledges our professional reorienting
his role is what we need to learn and how to learn it 

taught this course in APD (pre-FSD) and languages have changed
we are interested in #server side of things

Java as front end, Node.JS as backend 
we would do PHP, C#...depends on where we are in learning 

"software is a living thing" tutorials change 
API connecting back- and front-end

#API: a way of communicating between 2 computer systems
webservices is a superset of APIs

we didn't do mobile application. if it was, we would set up an Android application. 
If we did cloud admin, we would plug cool concepts in there 

we should be finishing 1pm 

we will be sharing our solutions in class, even incomplete 
imperfect is totally normal
we should volunteer to show our solutions

#consume: use an API 

$plateform0ndepended: we use a protocol, http is easy to pass thru proxies and firewalls
#SOAP, #REST standards are independent

#Serverless, #lambda-based applications in a later course (cloud)

"this course is for you, not for me"

![[Pasted image 20250211092510.png]]

Monday we will be sharing our solutions
good prep for midterm on Tuesday 

we will focus on back-end, middle-end to back-end

![[Pasted image 20250211092840.png]]
"make it look not terrible"

Git is a requirement 

two or three repos. GitHub is fine, lecturer uses BitBucket 

commit all the code daily, once after class, and once after homework

HARD requirement for project to use Git. We will need to use it as group. 
Git conflicts are here to protect us. 

we will use #Agile . #Kanban. #Trello. #scrum = txt file. 24h plan. shows all the things you're supposed to be paid for. 

pick people of a similar level in your team 

grading: 3 people x 1 week, is it gonna look like 1 person x 3 weeks? 
usually same grade to team members
we will have a Team Leader: making sure that people are doing useful things in the project, not a boss

"don't be a chicken, ask me questions" - G. Prokopski, 2025

![[Pasted image 20250211094246.png]]
Biggest part of course, most valuable in workplace. More APIs are #RESTful, or loosely based on RESTful. 
#CRUD: Create Read Update Delete 
![[Pasted image 20250211124847.png]]
![[Pasted image 20250211125107.png]]
we will maybe do some hosting 

Gregory is good at troubleshooting OS. Gregory defends NetBeans, "used to be the best, fantastic for specific uses, notably graphic interfaces on desktop". 
Useful for drag and drop UI, and then code the backend for that.

API on top of RESTful and others 

homework after midterm: meet with team and discuss topic chosen on Monday
writing a 4-5 page proposal (not a draft), we can start easier 

![[Pasted image 20250211100029.png]]

20 mins for a demo + presentation. 
we will be provided with a guideline for PwP slides. 

Q: OS? A: No preference. One course that requires windows, dot.net. 

![[Pasted image 20250211100403.png]]

![[Pasted image 20250211100502.png]]

he's sharing stuff somewhere
this is neat, I want to understand this: https://packagist.org/packages/boronczyk/localization-middleware

![[Pasted image 20250211100751.png]]

![[Pasted image 20250211100814.png]]

his notes? learn by heart. if there's a theory exam, that will be the subject. 
learn error codes by heart.
![[Pasted image 20250211101058.png]] 

Q from Trang: tutorial, package not installing. 
A: we must remain flexible with packages. 
![[Pasted image 20250211101247.png]]

![[Pasted image 20250211101828.png]]

#node_modules: the column on the left
![[Pasted image 20250211101844.png]]

libraries require libraries 

#npm manages the dependencies, the correct versions 

==Internet - colleague - teacher== are the steps for questions

have limits in mind, if 15 mins, ask the teacher, we will debug without giving the whole solution

https://restfulapi.net/http-methods/
#safe methods - no updating/deleting only retrieval. basically read-only. 
e.g. GET, HEAD, OPTIONS, TRACE
#idempotent methods:  **produce the same results if executed once or multiple times**. 
e.g. **PUT, DELETE and safe methods (**GET, HEAD, OPTIONS, TRACE**) are idempotent methods**.

## The GET Method

GET is used to request data from a specified resource.

Note that the query string (name/value pairs) is sent in the URL of a GET request:

/test/demo_form.php?name1=value1&name2=value2

**Some notes on GET requests:**

- GET requests can be cached
- GET requests remain in the browser history
- GET requests can be bookmarked
- GET requests should never be used when dealing with sensitive data
- GET requests have length restrictions
- GET requests are only used to request data (not modify)

## The POST Method

POST is used to send data to a server to create/update a resource.

The data sent to the server with POST is stored in the request body of the HTTP request:

POST /test/demo_form.php HTTP/1.1  
Host: w3schools.com  
  
name1=value1&name2=value2

**Some notes on POST requests:**

- POST requests are never cached
- POST requests do not remain in the browser history
- POST requests cannot be bookmarked
- POST requests have no restrictions on data length
## Compare GET vs. POST

The following table compares the two HTTP methods: GET and POST.

![[Pasted image 20250211122132.png]]

Never use GET when sending passwords or other sensitive information!
POST is a little safer than GET because the parameters are not stored in browser history or in web server logs

GET alone is risky. DELETE and POST should be required. 

![[Pasted image 20250211143125.png]]

## The PUT Method

PUT is used to send data to a server to create/update a resource.

The difference between POST and PUT is that PUT requests are #idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.

---

## The HEAD Method

HEAD is almost identical to GET, but without the response body.

In other words, if GET /users returns a list of users, then HEAD /users will make the same request but will not return the list of users.

A HEAD request is useful for checking what a GET request will return before actually making a GET request - a HEAD request can read the Content-Length header to check the size of the file, without actually downloading the file.

---

## The DELETE Method

The DELETE method deletes the specified resource.

---

## The PATCH Method

The PATCH method is used to apply partial modifications to a resource.

---

## The OPTIONS Method

The OPTIONS method describes the communication options for the target resource.

---

## The CONNECT Method

The CONNECT method is used to start a two-way communications (a tunnel) with the requested resource.

---

## The TRACE Method

The TRACE method is used to perform a message loop-back test that tests the path for the target resource (useful for debugging purposes).
![[Pasted image 20250211142738.png]]

# JSON 
#json from https://www.w3schools.com/js/js_json_parse.asp
When receiving data from a web server, the data is always a ==string==.
==Parse the data with `JSON.parse()`==, and the data becomes a JavaScript ==object==.

Date objects are not allowed in JSON. If you need to include a date, write it as a string.
Or, you can use the second parameter, of the `JSON.parse()` function, called _reviver_.
The _reviver_ parameter is a function that checks each property, before returning the value.
### Example

Convert a string into a date, using the _reviver_ function:

```
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';  
const obj = JSON.parse(text, function (key, value) {  
  if (key == "birth") {  
    return new Date(value);  
  } else {  
    return value;  
  }  
});  
  
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
```

will return

John, Sat Dec 13 1986 19:00:00 GMT-0500 (Eastern Standard Time)

the #reviver function returned the date as an #object 
 idem for functions, they're not allowed. Enter them as strings. 
 
```
const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';  
const obj = JSON.parse(text);  
==obj.age = eval("(" + obj.age + ")");==
  
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();
```
returns 
John, 30
==You should avoid using functions in JSON, the functions will lose their scope, and you would have to use `eval()` to convert them back into functions.==

#stringify to send objects to server:
```
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
```
returns
`{"name":"John","age":30,"city":"New York"}`

idem for arrays

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;

returns this JSON string
["John","Peter","Sally","Jane"]


Storing data in local storage

// Storing data:  
```
const myObj = {name: "John", age: 31, city: "New York"};  
const myJSON = JSON.stringify(myObj);  
localStorage.setItem("testJSON", myJSON);  
```
  
// Retrieving data: 
```
let text = localStorage.getItem("testJSON");  
let obj = JSON.parse(text);  
document.getElementById("demo").innerHTML = obj.name;
```

what's inside the {} is called #object_litteral
![[Pasted image 20250211124030.png]]
JSON object literals are surrounded by curly braces {}.
JSON object literals contains key/value pairs.
Keys and values are separated by a colon.
Keys must be strings, and values must be a valid JSON data type:
- string
- number
- object
- array
- boolean
- null
Each key/value pair is separated by a comma.

![[Pasted image 20250211124049.png]]

JSON CANNOT BE AN OBJECT. it is a STRING FORMAT. 

parse = create a JS object from string
stringify = create a string for JSON from a data type 

###### In JSON, array values must be of type string, number, object, array, boolean or _null_.###### In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and _undefined._

Accessing object values by dot or bracket notation
![[Pasted image 20250211124220.png]]
lopping thru
![[Pasted image 20250211124332.png]]
![[Pasted image 20250211124353.png]]

## Sending Data

If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server.

## Receiving Data

If you receive data in JSON format, you can easily convert it into a JavaScript object


OKAY let's build an API.
https://code.tutsplus.com/code-your-first-api-with-nodejs-and-express-understanding-rest-apis--cms-31697t 
An **API** is an Application Programming Interface, which is an interface that allows software programs to communicate with each other. A **RESTful API** is simply an API that adheres to the principles and constraints of REST. In a Web API, a server receives a **request** through a URL endpoint and sends a **response** in return, which is often data in a format such as JSON.

### Six guiding constraints define the REST architecture: 

1. **Uniform Interface**: The interface of components must be the same. This means using the URI standard to identify resources—in other words, paths that could be entered into the browser's location bar.
2. **Client-Server**: There is a separation of concerns between the server, which stores and manipulates data, and the client, which requests and displays the response.
3. **Stateless Interactions**: All information about each request is contained in each individual request and does not depend on session state.
4. **Cacheable**: The client and server can cache resources.
5. **Layered System**: The client can be connected to the end server, or an intermediate layer such as a load-balancer.
6. **Code on Demand (Optional)**: A client can download code, which reduces visibility from the outside.


HTTP works by opening a **TCP** (Transmission Control Protocol) connection to a server port (`80` for `http`, `443` for `https`) to make a request, and the listening server responds with a status and a body.


![[Pasted image 20250211202310.png]]
#curl for testing the status code of a resource 
![[Pasted image 20250211202337.png]]

When an API is created on a server, the data it contains is accessible via #endpoints. An **endpoint** is the URL of the request that can accept and process the `GET`, `POST`, `PUT`, or `DELETE` request.

An API URL will consist of the root, path, and optional query string.

- **Root** e.g. `https://api.example.com` or `https://api.example.com/v2`: The root of the API, which may consist of the protocol, domain, and version.
- **Path** e.g. `/users/`or `/users/5`: Unique location of the specific resource.
- **Query Parameters (optional)** e.g. `?location=chicago&age=29`: Optional key value pairs used for sorting, filtering, and pagination.We can put them all together to implement something such as the example below, which would return a list of all users and use a query parameter of `limit` to filter the responses to only include ten results.

`https://api.example.com/users?limit=10`

# Rules for writing an API
standard RESTful API

- **Paths should be plural**: For example, to get the user with an id of `5`, we would use `/users/5`, not `/user/5`.
- **Endpoints should not display the file extension**: Although an API will most likely be returning JSON, the URL should not end in `.json`.
- **Endpoints should use nouns, not verbs**: Words like `add` and `delete` should not appear in a REST URL. In order to add a new user, you would simply send a `POST` request to `/users`, not something like `/users/add`. The API should be developed to handle multiple types of requests to the same URL.
- **Paths are case sensitive and should be written in lowercase with hyphens as opposed to underscores**.

































 







