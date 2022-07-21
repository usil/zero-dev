require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/authorize", (req, res) => {
  return res.json({
    content: {
      url: `${process.env.OWN_BASE_URL}/callback`,
    },
  });
});

app.post("/authorize_for_ui", (req, res) => {
  return res.json({
    content: {
      url: `${process.env.OWN_BASE_URL}/callback_for_ui`,
    },
  });
});

app.post("/token_user", (req, res) => {
  return res.status(200).json({
    content: {
      accessToken: "test",
      refreshToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNjRhZGQxYi05YzBhLTQyMjAtYjVhNC0zOTBkMjU1M2FiOWUiLCJpYXQiOjE2NTA1MjI3MjIsInN1YiI6InJsZW9uaUB1c2lsLmVkdS5wZSIsImV4cCI6MTY1MDUyNjMyMn0.NdLxkxyBqYM3aOVwWLkMrZYWkG8dPXB1pBvYkrRO-us",
      tokenType: "bearer",
      expiresIn: "3600s",
      mail: "rleoni@usil.edu.pe",
      displayName: "Richard Leon Ingaruca",
      firstName: "jane",
      lastName: "doe",
      category: "cat1",
      position: "pos1",
      businessUnits: [
        {
          identifier: "radUnit",
          profiles: [
            {
              identifier: "radProfile",
              roles: [
                {
                  identifier: "asistente",
                  options: [
                    {
                      identifier: "opt1",
                      name: "opt1",
                      description: "opt1",
                      id: 1,
                      type: "WEB_OPTION",
                      value: "proyecto",
                      order: 0,
                    },
                    {
                      identifier: "opt1",
                      name: "opt1",
                      description: "opt1",
                      id: 1,
                      type: "WEB_OPTION",
                      value: "servicio",
                      order: 0,
                    },
                    {
                      identifier: "opt1",
                      name: "opt1",
                      description: "opt1",
                      id: 1,
                      type: "WEB_OPTION",
                      value: "plan_mensual",
                      order: 0,
                    },
                    {
                      identifier: "opt2",
                      name: "opt2",
                      description: "opt2",
                      id: 2,
                      type: "INTERNAL_RULE",
                      value: "proyecto::CRUD",
                      order: 4,
                    },
                    {
                      identifier: "opt2",
                      name: "opt2",
                      description: "opt2",
                      id: 2,
                      type: "INTERNAL_RULE",
                      value: "servicio::CRUD",
                      order: 4,
                    },
                    {
                      identifier: "opt2",
                      name: "opt2",
                      description: "opt2",
                      id: 2,
                      type: "INTERNAL_RULE",
                      value: "plan_mensual::CRUD",
                      order: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  });
});

app.post("/token_user_for_ui", (req, res) => {
  return res.status(200).json({
    content: {
      accessToken: "test",
      refreshToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNjRhZGQxYi05YzBhLTQyMjAtYjVhNC0zOTBkMjU1M2FiOWUiLCJpYXQiOjE2NTA1MjI3MjIsInN1YiI6InJsZW9uaUB1c2lsLmVkdS5wZSIsImV4cCI6MTY1MDUyNjMyMn0.NdLxkxyBqYM3aOVwWLkMrZYWkG8dPXB1pBvYkrRO-us",
      tokenType: "bearer",
      expiresIn: "3600s",
      mail: "rleoni@usil.edu.pe",
      displayName: "Richard Leon Ingaruca",
      firstName: "jane",
      lastName: "doe",
      category: "cat1",
      position: "pos1",
      businessUnits: [
        {
          identifier: "RadUI",
          profiles: [
            {
              identifier: "RadUI",
              roles: [
                {
                  identifier: "admin",
                  options: [
                    {
                      identifier: "opt1",
                      name: "opt1",
                      description: "opt1",
                      id: 1,
                      type: "WEB_OPTION",
                      value: "proyecto",
                      order: 0,
                    },
                    {
                      identifier: "opt1",
                      name: "opt1",
                      description: "opt1",
                      id: 1,
                      type: "WEB_OPTION",
                      value: "servicio",
                      order: 0,
                    },
                    {
                      identifier: "opt1",
                      name: "opt1",
                      description: "opt1",
                      id: 1,
                      type: "WEB_OPTION",
                      value: "plan_mensual",
                      order: 0,
                    },
                    {
                      identifier: "opt2",
                      name: "opt2",
                      description: "opt2",
                      id: 2,
                      type: "INTERNAL_RULE",
                      value: "proyecto::CRUD",
                      order: 4,
                    },
                    {
                      identifier: "opt2",
                      name: "opt2",
                      description: "opt2",
                      id: 2,
                      type: "INTERNAL_RULE",
                      value: "servicio::CRUD",
                      order: 4,
                    },
                    {
                      identifier: "opt2",
                      name: "opt2",
                      description: "opt2",
                      id: 2,
                      type: "INTERNAL_RULE",
                      value: "plan_mensual::CRUD",
                      order: 4,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  });
});

app.get("/callback", (req, res) => {
  return res
    .status(302)
    .redirect(`${process.env.REDIRECT_FRONT_BASE_URL}/oauth2/callback`);
});

app.get("/callback_for_ui", (req, res) => {
  return res
    .status(302)
    .redirect(
      `${process.env.REDIRECT_FRONT_BASE_URL_ZERO_DEV_UI}/oauth2/callback`
    );
});

app.post("/v2/oauth2/token/validate", (req, res) => {
  if (req.body.token === "test") {
    return res.json({
      code: 200000,
      message: "success",
      content: {
        isAllowed: true,
        subject: "sanvi@828fligth.com",
      },
    });
  }
  return res.json({
    code: 200000,
    message: "success",
    content: {
      isAllowed: false,
      subject: "sanvi@828fligth.com",
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening ready");
});
