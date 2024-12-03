# Analytcs Api GlobalRides.lda 

# Project:
Criar um serviço de analytics, recolha e intereção com os dados. 
O serviço recolhe os dados da base de dados mongodb.
O serviço é relacionado com entrada e saida de horas de os motoristas.

# Type: 
Module.

# Npm dependencies:
Express,
Mongodb,
Dotenv,
nodemoon.

# Endpoints:
### Available endpoints:  
``` /analytics/car ```     Get the analytics of car from database. 

``` /analytics/driver ```  Get the analytics of driver from database. 

``` /analytics/car/km ```  Get the analytics of car km from from database.

# Variable environment:
```
export MONGO_DB='mongodb+srv://<username>:<password>@<cluster>.tpn4u.mongodb.net/?retryWrites=true&w=majority';
export PORT_SRV=5999;
```
* MONGO_DB = Variable to do a connection and authentication with database,
* PORT_SRV = Port that the service will listen to (Default value 0 and required);

# System Administration:
* Start service:
```
$ npm nodemon
```
or
```
$ node server/index.js
```

