const fetch = require("node-fetch");
const { Webhook } = require("../config");

onNet("blankyNet:aimlogs:logger", async (id) => {
  await fetch(Webhook, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Aim Logs",

      embeds: [
        {
          color: 11730954,

          title: "Aim Logs",

          description: `**${GetPlayerName(
            source
          )} [${source}]** is aiming at **${GetPlayerName(id)} [${id}]**`,
        },
      ],
    }),
  });
});
