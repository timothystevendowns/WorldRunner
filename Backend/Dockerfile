# Stage 1: build the Spring Boot jar
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app

COPY ./Backend/sampleapp/pom.xml ./pom.xml
COPY ./Backend/sampleapp/.mvn ./.mvn
COPY ./Backend/sampleapp/mvnw ./mvnw
COPY ./Backend/sampleapp/src ./src

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Stage 2: run the app
FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=build /app/target/sampleapp-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]