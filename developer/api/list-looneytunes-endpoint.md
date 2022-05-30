
---
|app | app-id | endpoint id |
|:------|:-------|:-------|
| template-api | api-1234 | endpoint-1003 |

---
# Template Api: List Looney Tunes Endpoint

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

<img src="https://i.ibb.co/rt0Hf3q/video.png" width="100">

---
## Authentication

Show the authentication docs link of the related api artifact.

---
## Authorization

Show business units, profile, roles and options:

|Business Unit | Profile/Role | Option | Type  |
|:------|:-------|:-------|:-------|
| Acme Enterprise | looney-tunes-boss | /acme/api/v1/looney-tunes/ POST | api

## Endpoint

|url | method |
|:------|:-------|
| /acme/api/v1/looney-tunes/ | POST |

---
## Rest Specification

Show the url of Rest Specification Portal.

---
## Dependencies

List the specific dependencies of this endpoint.

<!--
@startmindmap
* /acme/api/v1/looney-tunes/
** /another/external/service
** /another/internal/service
** database-abc
@endmindmap
-->

![](http://www.plantuml.com/plantuml/png/PSqn2iCm30NGtQVe70YYDyXLVkmF5SHoa5JJthuKkfJCRtXR93oxMkiuot8Jr4x1gJBlSenXVA_vD8QKvQisya4Nlf9kE2JeKol_KEsA3OaTmHLxBHkj_SeF)

|dependency | id  |
|:------|:-------|
| /another/external/service | ext-1001 |
| /another/internal/service | api-1002|
| database-abc | db-1003 |

---
## Flow Chart

Describe and demonstrate the logic and or steps of the algorithm used in the the backend of this specific endpoint. Starts with the http client invocation and ends with the api response.
<!--
@startuml
start
:json is received;

repeat: user enters login name\n and password;
backward: show error message;
repeat while (credentials are correct?) is (no)
->yes;
:json is returned;

stop
@enduml
-->

![](//www.plantuml.com/plantuml/png/JSunheCm48JXtgVO4eft0P1UE4YQZJq29sONxPfOkNq8If5kYj6lR_BALlUrX7E4uUugb9qC4Vc9D8PWsC1reDrX1Aamfw9p5X9USHLYIRInUrCx_ZUEZyQM1l956y5CZLQuyupn6wEsv0BgeY4TnSp5YGqKrGonNleFeHFjmz__2px-kkfkShgywXOcI3huRm00)

---
## Sequence Diagram

This diagram represents the interaction between objects, components, artifact, etc over a specific period of time. In other words, it represents the sequence of messages flowing from one object to another.

Starts with the http client invocation and ends with the api response.
<!--
@startuml
participant client as client
participant search_endpoint as search_endpoint
participant "query-api.com/v1/query" as query_endpoint
participant "audit-api/v1/activity" as audit

client -> search_endpoint : client sends json
search_endpoint -> query_endpoint : (01) query user data
search_endpoint -> audit : (02) audit client activity
search_endpoint -> client : endpoint returns json
@enduml
 -->

 ![](https://www.plantuml.com/plantuml/png/TP512y8m38Nl_HLb9tUOSnuzoFw9XAvWPEjgcmxyzsPT58hpbFIzzv47xID1e3IDolD4WnuSQJEYvG5HjiAC5eAvtwmR_8nRgfJAUFLCDhmQy7WqyzGkNPk5QkNozWU3D22js8g08LoGDYexIad9vlhJwAB5Yon5_OYpKsKcO-LrfWwdhjvKdQ8DUW22FJ0NoFbpBGyv-EcvGqc4iQyOBANWf63FCl_36m00)



**Step1**

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

**Step2**

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

---
## Business Rules

Here list all the related business rules

| rule_id | rule url |
|------|------|
| br_1000  |https://images.squarespace-cdn.com/content/v1/50c9c50fe4b0a97682fac903/1368269299348-1QRVXERZYNBVYBQV47VD/BR.jpg |
| br_1001  |Lorem ipsum dolor sit amet|
| br_1002  |Lorem ipsum dolor sit amet|

---
## Database model

Database diagram of the specific table related to this endpoint.

<!--
@startuml
' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "Entity01" as e01 {
  *e1_id : number <<generated>>
  --
  *name : text
  description : text
}

entity "Entity02" as e02 {
  *e2_id : number <<generated>>
  --
  *e1_id : number <<FK>>
  other_details : text
}

entity "Entity03" as e03 {
  *e3_id : number <<generated>>
  --
  e1_id : number <<FK>>
  other_details : text
}

e01 ||..o{ e02
e01 |o..o{ e03
@enduml
 -->

![](https://www.plantuml.com/plantuml/png/bT51Qm8n40NWUtx5mqkXeBYxjoBYfRtqHqZSlBf3iycIZBMY_Uzrj-b9YlGKNkR1bp2Rh3RfeVV6FA0JHsX7v26gcL8hgVKSX_OZYiEGuiwpppYATh1Xx-dGfdZCU2FLv7S9WqssXvT0FGr4JDf5OnXKz8JPytGkgnbi1fSLpWPuPBKLXoU4GxzZmcgrPs2oIhTU6s0-7ql1zhnsb9zwZOwvJJAenF1x-NN3r8Mf2rFVPsxVyl8wJQDsJ5j7jUBptsHJoAQGpNtot-AomkMoMCJp-BMV64jiZDamk76btm00)


If database data dictionary exist, show the urls to any table. If not, add a minimal description for any table

**TABLA PAYMENT_COURSE**

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

| Column       | Type |  Description |
| ------------- | ------------- | ------------- |
| ID  | Long  | id  |
| LOGIN_TIME  | Varchar  | last login datetime  |

If database exist on the infrastructure section, add its link

---
## Configurations

List all the internal and external configurations that are required for this functionality: Roles, Users, Permissions, google settings, facebook settings, analytics, account renewal, etc.

#### Manual Configurations

Add the following values into the settings.php of drupal ....

#### Cron / Scheduler

Configure the scheduler xyz to run in this period ...

#### SQL Inserts

Execute these sql inserts into the database xyz

#### Google Login Oauth2

Configure an oauth2 login on google with these values...

#### Zoom videos export

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la


---
## Editors
| name | last updated |
|:------|-------|
| Jane Doe |  11 Nov 2020 |
| Kurt Weller |  21 Nov 2020 |
