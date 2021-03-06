const axios = require("axios");

const chooseLanguage = async (params) => {
  const { chat_id } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: "Вибери мову!",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Укр",
                callback_data: "ua",
              },
            ],
            [
              {
                text: "Рус",
                callback_data: "ru",
              },
            ],
            [
              {
                text: "Анг",
                callback_data: "en",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  chooseLanguage,
};
