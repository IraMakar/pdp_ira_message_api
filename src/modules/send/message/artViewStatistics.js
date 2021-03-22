const axios = require("axios");

const texts = {
  uk: {
    text1: "Цей функціонал платний",
    text2: "Бажаєш скористатися?",
    button_1: "Оплатити",
    button_2: "По хештегах",
    button_3: "Хочу вернутись назад",
  },
  ru: {
    text1: "Цей функціонал платний",
    text2: "Бажаєш скористатися?",
    button_1: "Оплатити",
    button_2: "За хэштегом",
    button_3: "Хочу вернуться назад",
  },
  en: {
    text1: "Цей функціонал платний",
    text2: "Бажаєш скористатися?",
    button_1: "Оплатити",
    button_2: "By hashtags",
    button_3: "I want to go back",
  },
};

const artViewStatistics = async (params) => {
  const { chat_id, lang } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendInvoice`,
      {
        chat_id: 467013671,
        title: texts[lang].text1,
        description: texts[lang].text2,
        payload: `statisic_${chat_id}`,
        provider_token: "632593626:TEST:sandbox_i45338097137",
        start_parameter: "qwerty",
        currency: "UAH",
        prices: [
          {
            label: "Статистика художника",
            amount: 100,
          },
        ],
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                pay: true,
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: "backToArtistMenu",
              },
            ],
          ],
        },
      },
    )
  ).data;
};

module.exports = {
  artViewStatistics,
};
