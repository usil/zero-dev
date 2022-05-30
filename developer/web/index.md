---
|app | app type | app id |depends_on |
|:------|:-------|:-------|:-------|
| template-web | web | web-1235 | acme-api, oscorp-db, funny-smtp |

---

# Template Web

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<img src="https://i.ibb.co/rt0Hf3q/video.png" width="100">

---

## Authentication

If its authentication is standard, show the common authentication link (docs/security/Authentication.md). If this api has its own authorization engine, describe it here.

---

## Authorization

Show business units, profile, roles and options:

| Business Unit   | Profile/Role  | Role           | Option             |
| :-------------- | :------------ | :------------- | :----------------- |
| Acme Enterprise | standard-user | pasarela-admin | /payment/manage    |
| Acme Enterprise | standard-user | pasarela-admin | /payment/provides  |
| Acme Enterprise | standard-user | pasarela-admin | /payment/countries |

If its authorization is standard, show the common authorization link (docs/security/Authorization.md). If this api has its own authorization engine, describe it here.

---

## Technologies

| language | version |
| :------- | :------ |
| nodejs   | 14      |
| vue      | x.y.z   |

---

## High Level Architecture

- spa > api
- pwa > api
- ssr > server

Specify the architecture type of the application this feature(form) belongs to

- SPA : Microservice : Database
- PWA : Microservice : Database
- SSR : Server : Database
- SSR : Microservice : Database
- Mobil : Microservice : Database
- Monolithic
- Scheduler

Example:

<!--
@startuml
rectangle api
storage web_spa
database database
web_spa -right-> api
api -right-> database
@enduml
-->

![img](http://www.plantuml.com/plantuml/png/SoWkIImgAStDuIfAJIv9p4lFILL8BCZaAYx9BqfCJrKeJqsABov8v4f9B4bCIYnELO0nkA0o2hf5cUaP9RfsO6r031T0A7L8pKi1MW40)

---

## Developer Workspace

If it is based on the template, show the link to the common developer workspace (docs/applications/webs/common). Otherwise, describe it here.

---

## Global Dependencies

List all the global dependencies required for the entire web application

<!--
@startmindmap
* spa-web
** google.oauth2.com
** cdn.com
** analytics.com
** web-translator.com
@endmindmap
-->

![](https://www.plantuml.com/plantuml/png/SoWkIImgoStCIybDBE3IKYWkIDGjJqtYqj9IIC_FJyz9rSjFB2t9CD9Bpiy52IQdvC6OYNc9EPKbcSd5C06WFjsIeiIyufp4almYiAX3QbuAr700)

| dependency            | id       |
| :-------------------- | :------- |
| azue remote service   | ext_1001 |
| internal acme service | api_1002 |
| database-xyz          | db_1003  |

---

## Site Map

In general, a sitemap is a hierarchical diagram that allows you to visualize the structure of a website. They’re used to define the site’s taxonomy. Taxonomy is a system used to classify things. It’s used to define relationships and similarities amongst content. A website taxonomy makes it easier for users to navigate and to find the content they are looking for. Site maps show us what goes where, and how certain pages are connected.

Also called : web site flow chart, flowchart infographic, design wireframe UI

<!--
@startwbs
* Ecommerce web
** News
*** Company news
*** Single article
** Products
*** Books
*** Projects
*** Drones
** Vendors
** Abouts us
** Contact us
@endwbs
-->

![](https://www.plantuml.com/plantuml/png/DOx12i8m343l-ugS-nNJwLK4mNkR1PckYQGfnRyts-ZjlPS4CXQBQYsL8S0L9MTI96YKXX3WHisxmoJv6_a7tCDZuTTAuASBhkG9xYfpHJl6Pv7FGPxVrFD5XMb3U1BFeZkUabGhK7UPX2sYRJRwYl_r1m00)

sources:

- https://www.outofsightdesigns.com/what-is-a-sitemap/
- https://i.pinimg.com/originals/ec/b8/4b/ecb84b625de0ba43e8e56f9113b10e1d.jpg

## Features

More information about all the features (ui forms) of this web could be find in Self Service Docs, searching with **template-web**

Here a basic list of all features of this web:

| name                  | url      | feature id    |
| :-------------------- | :------- | :------------ |
| login                 | /        | feature_1000  |
| import student grades | /student | feauture_1001 |

---

## Variables

As any other application, a web app needs variables. An app’s environment-specific configuration should be stored in environment variables (not in the app’s source code)

| variable name         | sample value                  | description                |
| :-------------------- | :---------------------------- | :------------------------- |
| EMPLOYEE_BASE_URL_API | https://acme-employee-api.com | Lorem ipsum dolor sit amet |
| CDN_IMAGES            | https://acme-cdn.com          | Lorem ipsum dolor sit amet |
| CLIENT_ID             | **\***                        | Lorem ipsum dolor sit amet |

---

## Configurations

Usually, configurations are at backend layer or at feature level. Anyway if the web require some kind of configurations, describe them here.

Specific endpoint dependencies, should be showed at the feature level

#### Login

This application uses microsoft oauth2 login. Follow [this](#) document to get more details and or configure. This configuration give us 3 variables required by the application: CLIENT_ID, CLIENT_SECRET, REDIRECT_URL

#### Database inserts

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---

## Editors

| name         | last updated |
| :----------- | ------------ |
| Luis Huertas | 30 May 2022  |
