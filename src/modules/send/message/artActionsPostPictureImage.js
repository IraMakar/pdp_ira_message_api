const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Вітаю, ти на шляху виставлення своєї картини! \nЦе займе всього 5 хв твого часу. \n\nКрок 1 з 5 - надішли фото своєї картини!",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Поздравляю, ты на пути выставления своей картины! \nЭто займет всего 5 минут вашего времени. \n\n Шаг 1 из 5 - пришли фото своей картины!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Congratulations, you are on the way to exhibiting your painting! \nIt only takes 5 minutes of your time. \n\nStep 1 of 5 - send a photo of your picture!",
      button_1: "Go back", 
  },
};

const artActionsPostPictureImage = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                callback_data: "exhibitPicture",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  artActionsPostPictureImage,
};
