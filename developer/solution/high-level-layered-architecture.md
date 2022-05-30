<!--
{
  "order":1,
  "title": "High Level Layered Architecture Diagram"
}
-->

# High Level Layered Architecture Diagram

This diagram shows at high level the layers and cross-cutting services of the entire architecture.

As a summary, the diagram should look like this:

![](https://i.ibb.co/KqbxJgK/Managing-Cross-Cutting.jpg)

Also in this diagram we could add boundaries to highlight the segments : cloud, on-premise, external, etc

Similar diagrams:

- https://www.c-sharpcorner.com/UploadFile/vendettamit/managing-cross-cutting-concerns-the-logger-and-logging/
- https://medium.com/the-internal-startup/how-to-draw-useful-technical-architecture-diagrams-2d20c9fda90d
- https://static.packt-cdn.com/products/9781838982973/graphics/assets/5a4fd4a9-d664-4351-985d-fc1b37687b68.png

This kind of diagram have the following layers, which allow us to change specific components without compromising the operation of the entire platform:

## Presentation Layer

This layer refers to the type of modern applications called SPA (Single Page Application). These applications are developed in javascript, which once downloaded to the browser does not re-execute invocations to the web server.

This layer receive several name: application layer, frontend layer, client layer, etc

In this layer Angular, Nodejs and Docker are used.

## Business Logic Layer

The heart of an enterprise application is the business logic, which implements the business rules. Developing complex business logic is always challenging. Source: [Chapter 5. Designing business logic in a microservice architecture](https://livebook.manning.com/book/microservices-patterns/chapter-5/3)

New layer in which all reusable and atomic functionalities must be consolidated.

In this layer C#(Netcore), Nodejs and Docker are used.

## Data Storage Layer

The data storage layer of enterprise applications deals with persistent data stored in a relational and no relational databases. Source [Using JPA in the Persistence Layer](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/49/ede1daba7b088be10000000a421937/content.htm?no_cache=true)

In this layer Oracle, Mysql and Docker are used.

## Cross Cutting Concerns

A list of transversal, shared & common services required by all applications in all layers. More details in **Cross Cutting Concerns** section
