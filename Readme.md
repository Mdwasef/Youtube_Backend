# Backend Project

This is mega backend project which will be a outube clone.

npm install --save-dev nodemon   -> used to save file nd run files automatically without stopping servers.

 "scripts": {
   "dev":"nodemon src/index.js"
  },

  Inside src create folders using 
   mkdir controllers, db, middlewares, models, routes, utils


1. db folder is used to config the database connection
2. utils folder is used to create utilities like email sending, message sending utilities.


prettier package is used to manage code formating 
 npm i -D  prettier
 After installing prettier package we have to insert some files manually ...


 During writing password of mongodb db if password contains @ then write %40 at the place of @

 req.params
 req.body
 req.cookies
 cookie-parser
 cors
 middleware


 mongoose_package:-> mongoose-aggregate-paginate-v2 -> used to write aggrigation qureies....


 🧠 What is bcrypt?

bcrypt is a library that:

👉 Converts password into hashed string
👉 Adds salt automatically
👉 Makes passwords hard to crack


To upload files like videos, img we use coludinary to get 3rd party link 

To upload we have options like fileUpload , multer