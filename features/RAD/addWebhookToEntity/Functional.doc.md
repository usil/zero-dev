# Add webhook to entity: Functional document

| app      | feature id | feature type | feature name          | business unit | process   | department |
| :------- | :--------- | :----------- | :-------------------- | :------------ | :-------- | :--------- |
| ZERO DEV | feature-10 | web          | Add webhook to entity | division x    | process y | finance    |

---

Configure the webhook endpoint to execute when a new instance of the entity is created, updated or deleted.

<img src="https://i.ibb.co/rt0Hf3q/video.png" width="100">

---

## Authentication

Assuming that all the forms on a web has the dame authentication, just show the link of developer center for this web artifact.

---

## Authorization

Forms are related to features. Each feature could be accessed for users with specifics permissions (roles, profiles, grants, etc) in a specific business unit:

| Business Unit   | Profile/Role  | Option          | Type |
| :-------------- | :------------ | :-------------- | :--- |
| Acme Enterprise | finance-admin | /finance/search | web  |

---

## User UI Flow

Flow that shows all the steps (clicks or links) necessary for the user to perform their task

Example: Change number feature in whatssap app

<!--
@startwbs
* whatsap app
** 01 chats
*** 02 settings
**** 03 account
***** 04 change number
@endwbs
-->

![](https://www.plantuml.com/plantuml/png/5Smz3e0m2CNndLCmC_dX0NeLMabr49j2q-ihu_-NbvVCkVlC1eJpOZTkoAq14IuhbX2WY0rDt6-jqG4xSYdlK8yEE6AkLL37awL34Zt_umy0)

**If the app is a web** and each of the steps of the user flow has its own url, they must be mapped in the following table. If it's popups, it has no url.

| Step | Local                                 | Testing/ Q&A                                | PROD                                   |
| ---- | ------------------------------------- | ------------------------------------------- | -------------------------------------- |
| 01   | https://localhost:8080                | https://test-acme.edu.pe                    | https://www.acme.edu.pe                |
| 02   | https://localhost:8080/search-filters | https://test-web.acme.edu.pe/search-filters | https://www.acme.edu.pe/search-filters |

---

## Flow Chart

Describes the logic and or steps of the algorithm used in the frontend. Starts with user and ends with a submit or any interaction with the backend services.

Example: Login form feature

![Activity Diagram](http://www.plantuml.com/plantuml/png/BS-nQiGm40JGVhzYohiYFs11Sf3VIBCdJSuYicHsPOJ_Fi9SiJ35yDXvU5VhnrRa2h8SJaEtJ4Tlq1ZfCwt4u3E867TgNt3LM3lDKTehLrJT-5EXDM5Nzz4i1Nbg_1jgQO6lRO1cpR1DKbyCRmnZpOMuHMEQOjRYK2DYCsFiNtTanwssktnydlGWotV9imW_ufH-Zr9ENDyxyZodUsurY7XlkpnOqzpt3m00)

<!--
@startuml
start
:user tries to access the web;

repeat: user enters login name\n and password;
backward: show error message;
repeat while (credentials are correct?) is (no)
->yes;
:Client sucessfully starts its session;

stop
@enduml
 -->

---

## User Stories

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost

| story id | importance | estimated | As a ..         | I want to ...                    | So that ...                                       |
| -------- | ---------- | --------- | --------------- | -------------------------------- | ------------------------------------------------- |
| st_1000  | High       | 3d        | Content manager | Get a weekly report of analytics | I can monitor the effectiveness of content writer |
| st_1001  | Medium     | 5d        | Employee        | I want to be notified when       | So that I can submit my ...                       |

Samples:

- https://www.infomanagementcenter.com/wp-content/uploads/2019/06/Matters-6-15-29-SO-1.png
- https://www.whizible.com/how-to-write-effective-agile-scrum-user-story/
- https://seilevel.com/requirements/the-anatomy-of-a-user-story

---

## Business Rules

Here list all the business rules related to this feature or form.

If rules are documented or centralized on another system, just put its url. If not, describe the rule

| rule_id |
| ------- |
| br_1000 |
| br_1001 |
| br_1002 |
| br_1009 |

---

## Change history

Ticket/Issues or a some id related to the project

| #ID         | Stakeholder       | Project Manager | Team          | Date       | Description                               |
| :---------- | :---------------- | :-------------- | :------------ | :--------- | :---------------------------------------- |
| PR-MDA-123  | jane_doe@mail.com | Pepper Pots     | John Mcclane  | 20-10-2022 | It is requested to remove required values |
| FIX-MDA-123 | jon_doe@mail.com  | Phillip Coulson | Mathew Farrel | 15-10-2022 | It is requested to add required values    |

---

## Editors

| name         | last updated |
| :----------- | ------------ |
| Luis Huertas | 30 May 2022  |
