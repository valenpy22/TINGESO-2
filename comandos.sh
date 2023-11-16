#!/bin/bash

cd TINGESO-2/config-service/
mvn clean install -DskipTests=True
docker build -t valenpy22/config-service .
docker push valenpy22/config-service

cd ..
cd eureka-service/
mvn clean install -DskipTests=True
docker build -t valenpy22/eureka-service .
docker push valenpy22/eureka-service

cd ..
cd fee-service/
mvn clean install -DskipTests=True
docker build -t valenpy22/fee-service .
docker push valenpy22/fee-service

cd ..
cd student-service/
mvn clean install -DskipTests=True
docker build -t valenpy22/student-service .
docker push valenpy22/student-service

cd ..
cd exam-service/
mvn clean install -DskipTests=True
docker build -t valenpy22/exam-service .
docker push valenpy22/exam-service

cd ..
cd gateway-service/
mvn clean install -DskipTests=True
docker build -t valenpy22/gateway-service .
docker push valenpy22/gateway-service


