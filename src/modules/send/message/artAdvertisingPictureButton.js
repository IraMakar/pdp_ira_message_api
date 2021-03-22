const axios = require("axios");

const texts = {
  uk: {
    title: "Оплата за рекламування картини",
    description: 'Оплата за рекламування вибраної вами картини👆:',
    label: "Реклама картини",
    button_1: "Оплатити",
    button_2: "Назад",
    button_3: "До меню",
  },
  ru: {
    title: "Оплата за рекламування картини",
    description: 'Оплата за рекламування вибраної вами картини👆:',
    label: "Реклама картини",
    button_1: "Оплатить",
    button_2: "Назад",
    button_3: "В меню",
  },
  en: {
    title: "Оплата за рекламування картини",
    description: 'Оплата за рекламування вибраної вами картини👆:',
    label: "Реклама картини",
    button_1: "Pay",
    button_2: "Back",
    button_3: "To menu",
  },
};

const artAdvertisingPictureButton = async (params) => {
  const { chat_id, lang, templateVars } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendInvoice`,
      {
        chat_id,
        title: texts[lang].title,
        description: texts[lang].description,
        payload: `advertising_${templateVars.picture_id}`,
        provider_token: "632593626:TEST:sandbox_i45338097137",
        start_parameter: "qwerty",
        currency: "UAH",
        prices: [
          {
            label: texts[lang].label,
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
                text: texts[lang].button_2,
                callback_data: "advertisingPicture",
              },
              {
                text: texts[lang].button_3,
                callback_data: "backToArtistMenu",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  artAdvertisingPictureButton,
};
