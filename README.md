# nodejs-rabbitmq
This application for example producer and consumer nodejs rabbitmq

- directory producer is for send data to server rabbitmq
- directory consumer is for get data from server rabbitmq

for run application follow this step:
1. npm start in folder producer
2. npm start in folder consumer
3. request api to application producer
    - example request
        - url : http://127.0.0.1:54000/api/message
        - body: {
            "message" : "Hello World",
        }