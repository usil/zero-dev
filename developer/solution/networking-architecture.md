<!--
{
  "order":3,
  "title": "Networking Architecture Diagram"
}
-->

# Networking & Balancing Architecture Diagram

Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool.

Modern high‑traffic websites must serve hundreds of thousands, if not millions, of concurrent requests from users or clients and return the correct text, images, video, or application data, all in a fast and reliable manner. To cost‑effectively scale to meet these high volumes, modern computing best practice generally requires adding more servers.

A load balancer acts as the “traffic cop” sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. If a single server goes down, the load balancer redirects traffic to the remaining online servers. When a new server is added to the server group, the load balancer automatically starts to send requests to it.

In this manner, a load balancer performs the following functions:

- Distributes client requests or network load efficiently across multiple servers
- Ensures high availability and reliability by sending requests only to servers that are online
- Provides the flexibility to add or subtract servers as demand dictates

Source: [What Is Load Balancing](https://www.nginx.com/resources/glossary/load-balancing/)


<!--
@startuml
skinparam backgroundcolor transparent

rectangle client as "browser / mobil"
component third_party as "third party"
component internal_api_1 as "internal-api-1"
hexagon dns
component aws_lb as "aws load balancer"
component web1
component web2
component internal_api_2 as "internal-api-2"
component internal_api_3 as "internal-api-3"

client -- dns
internal_api_1 -- dns
third_party -- dns
dns -- aws_lb
aws_lb -- web1
aws_lb -- web2
aws_lb -- internal_api_2
aws_lb -- internal_api_3
@enduml
-->

![image](https://www.plantuml.com/plantuml/png/TL3HYeGm37pFLmJVvL1_OFz4qbhSicagQSMxlxzkpuFAuaDfPZ9X9dcaJ9htm91UNZPI2cZ8lbQDkomsSbJCIf9Aoqa6K6SpoSeEBVl282NiZCOZESKl3D5uxi36i4Lvj_FJwpANwVnJfHLZnQtCItOgn3DjVXwgyf_g2zKF7JpTDwrHS97K3DAHPZPre9J8aHOqn2JMQMjmE3DSuNXdFtxQZxTPfq_nr06Sn-dxTro4wted3UrjJggyKfvRmTzNY1h_2iS6NkFVDIPuE5dsmBy0)


|artifact|url|base hardware|scaling type|# nodes|scaling policy|scaling limit|
|--|--|--|--|--|--|--|
|web1|https:/acme-web1.com|3gb ram , 4vcpu|manual|1| -| -
|web2|https:/acme-web2.com|1gb ram , 1vcpu|vertical|1| cpu > 80% : +50% cpu| 400%
|internal-api|https:/acme-api1.com|1gb ram , 1vcpu|horizontal|*| ram > 80% : +1node| 3 nodes
