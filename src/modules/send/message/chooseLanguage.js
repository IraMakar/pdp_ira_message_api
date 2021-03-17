const axios = require("axios");

const chooseLanguage = async (params) => {
  const { chat_id } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: "Вибери, будь ласка, мову, щоб піти далі і продовжити своє пребування тут!",
        parse_mode: "Markdown",
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                text: "Українська",
                callback_data: "uk",
              },
            ],
            [
              {
                text: "Русский",
                callback_data: "ru",
              },
            ],
            [
              {
                text: "English",
                callback_data: "en",
              },
            ],
          ],
          //one_time_keyboard: false,
          //resize_keyboard: true
          remove_keyboard: true
        },
      }
    )
  ).data;
};

module.exports = {
  chooseLanguage,
};
