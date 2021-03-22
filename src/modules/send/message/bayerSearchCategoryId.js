const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Вибери відповідну категорію, картини якої бажаєш переглянути:",
    button_1: "Живопис",
    button_2: "Графіка",
    button_3: "Модерн",
    button_4: "Назад",
  },
  ru: {
    text1:
      "Выбери соответствующую категорию к которой желаешь добавить картину. \n\nЕсли нет соответствующей категории - обратись к администратору и он с радостью ее добавит.",
    button_1: "Живопись",
    button_2: "Графика",
    button_3: "Модерн",
    button_4: "Назад",
  },
  en: {
    text1:
      "Select the appropriate category to which you want to add the picture. \n\nIf there is no corresponding category - contact the administrator and he will be happy to add it.",
    button_1: "Painting",
    button_2: "Graphics",
    button_3: "Modern",
    button_4: "Back",
  },
};

const bayerSearchCategoryId = async (params) => {
  const { chat_id, lang, templateVars } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        reply_markup: {
          inline_keyboard: [
            ...templateVars.categories.map((category) => [
              {
                text: category.settings[lang],
                callback_data: `categIdSPic_${category.id}`,
              },
            ]),
            [
              {
                text: texts[lang].button_4,
                callback_data: "searchPictures",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  bayerSearchCategoryId,
};
