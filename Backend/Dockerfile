# Stage 1: build the Spring Boot jar
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app

COPY ./Backend/worldrunner/pom.xml ./pom.xml
COPY ./Backend/worldrunner/.mvn ./.mvn
COPY ./Backend/worldrunner/mvnw ./mvnw
COPY ./Backend/worldrunner/src ./src

RUN mvn clean package -DskipTests

# Stage 2: run the app
FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=build /app/target/worldrunner-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]