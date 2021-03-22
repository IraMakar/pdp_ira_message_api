const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Ми відправили художнику повідомлення, що вас зацікавила ця картина!",
  },
  ru: {
    text1:
      "Ми відправили художнику повідомлення, що вас зацікавила ця картина!",
  },
  en: {
    text1:
      "Ми відправили художнику повідомлення, що вас зацікавила ця картина!",
  },
};

const notificationToAstistAboutApplying = async (params) => {
  const { chat_id, lang, templateVars } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text:
          lang == "uk"
            ? `Заявка:\nКористувач: @${templateVars.user_login}\nІм'я картини: ${templateVars.picture_name}`
            : lang == "ru"
            ? `dfg:\dfg: @${templateVars.user_login}\dfg'я dfg: ${templateVars.picture_name}`
            : `Заявка:\nКористувач: @${templateVars.user_login}\nІм'я картини: ${templateVars.picture_name}`,
      }
    )
  ).data;
};

module.exports = {
  notificationToAstistAboutApplying,
};
