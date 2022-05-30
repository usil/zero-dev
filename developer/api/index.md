
---
|app | app type | app id|depends_on |
|:------|:-------|:-------|:-------|
| template-api | api | api-4567 | acme-api, oscorp-db, funny-smtp |

---

# Template Api

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<img src="https://i.ibb.co/rt0Hf3q/video.png" width="100">

---
## Authentication

If its authentication is standard, show the common authentication link (docs/security/Authentication.md). If this api has its own authorization engine, describe it here.

---
## Authorization

Show business units, profile, roles and options:

|Business Unit | Profile | Role | Option | Method  |
|:------|:-------|:-------|:----|:-------|
| Acme Enterprise | standard-user | pasarela-admin| /payment/void | get
| Acme Enterprise | standard-user | pasarela-admin| /payment/describe | post
| Acme Enterprise | standard-user | pasarela-admin| /payment/report | post

If its authorization is standard, show the common authorization link (docs/security/Authorization.md). If this api has its own authorization engine, describe it here.

---
## Technologies

|language | version  |
|:------|:-------|
| netcore | 3.1 |

---
## High Level Architecture

Specify the architecture type of the application

- api > api
- api > database

Example:

<!--
@startuml
rectangle acme_api as "acme-api"
storage one_api as "one-api"
storage another_api as "another-api"
database database
acme_api -right-> one_api
one_api -right-> another_api
another_api -right-> database
@enduml
-->

![img](https://www.plantuml.com/plantuml/png/LOz13eCm30JlVeN5FL-e-4cr1IiWGLBPxl-RYcB2ARlQqKGUpQ7-sJTIcHmbRyAOTddYlJACXrz9hGnaNXLPk9PhRVa-ebHVH0FuzmEQuNZ1XCz0yLNIDI-U7gUTZlSQUZD5xe6GZbBcTj4N)

---
## Developer Workspace

If it is based on the template, show the link to the common developer workspace (docs/applications/apis/common). Otherwise, describe it here.

---
## Global Dependencies

List all the global dependencies required for the entire api or microservice

<!--
@startmindmap
* acme-api
** database-mysql-acme
** ftp
** iam-validator
@endmindmap
-->

![](https://www.plantuml.com/plantuml/png/SoWkIImgoStCIybDBE3IKaXCpatLJIp8vDBIKaX9B4bCIYnErSsjB2xCqGL9WOJJIWf0L6PYhcvPOaucK5L-4PT3QbuAr1G0)



|dependency | id  |
|:------|:-------|
| azue remote service | ext_1001 |
| internal acme service | api_1002|
| database-xyz | db_1003 |

Here more examples of dependencies:

- ftp
- sftp
- apis internas
- apis externos
- base de datos
- azure face recognition
- google drive
- zoom
- canvas
- etc

---

## Variables

As any other application, a web app needs variables. An app’s environment-specific configuration should be stored in environment variables (not in the app’s source code)

| variable name | sample value | description |
|:------|:-------|:-------|
| EMPLOYEE_BASE_URL_API | https://acme-employee-api.com | Lorem ipsum dolor sit amet|
| DATABASE_HOST | 10.10.10.15 | Lorem ipsum dolor sit amet|
| LDAP_SECRET | ***** | Lorem ipsum dolor sit amet|

---
## Configurations

List the global configurations required to run this api on any environment. Specific configuration should be explained at rest endpoint level.

Specific endpoint dependencies, should be showed at the endpoint level

---
## Editors
| redactores | last updated |
|:------|-------|
| Jane Doe |  11 Nov 2020 |
| Kurt Weller |  21 Nov 2020 |
