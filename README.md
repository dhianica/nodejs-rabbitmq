# nodejs-rabbitmq
This application for example producer and consumer nodejs rabbitmq

- directory producer is for send data to server rabbitmq
- directory consumer is for get data from server rabbitmq

for run application you can follow this step:

```
npm start in folder producer
```

```
npm start in folder consumer
```

request api to application producer
example request

```
url : http://127.0.0.1:54000/api/message
```
body: { "message" : "Hello World", }
