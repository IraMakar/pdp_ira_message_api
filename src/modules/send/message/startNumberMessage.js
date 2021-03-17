const axios = require("axios");

/*const texts = {
    uk: {
        text1: "Вітаємо! Авторизуйся, будь ласка, за номером телефону.\nВведи номер телефону у вигляді +38... або натисни кнопку.👇",
        button_1: "Поділитися номером"
    },
    ru: {
        text1: "Поздравляем! Авторизуйся, пожалуйста, по телефону. \nВведы номер телефона в виде +38 ... или нажми кнопку.👇",
        button_1: "Поделиться номером"
    },
    en: {
        text1: "Congratulations! Please login by phone number. \ NEnter your phone number as +38 ... or press the button.👇",
        button_1: "Share number"
    }
};*/

const startNumberMessage = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        //text: texts[lang].text1,
        text: "Вітаємо! Авторизуйся, будь ласка, за номером телефону.\nВведи номер телефону у вигляді +38... або натисни кнопку.👇",
        reply_markup: {
          //remove_keyboard: true,
          //hide_keyboard: true,
          //one_time_keyboard: true,
          //resize_keyboard : true,
            keyboard: [
            [
              {
                //text: texts[lang].button_1,
                text: "Поділитися номером",
                request_contact: true,
              },
            ],
          ],
          one_time_keyboard: false,
          resize_keyboard : true,
        },
      }
    )
  ).data;
};

module.exports = {
    startNumberMessage,
};



/*"startMessage": {
    "text": "{{text}}",
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [
        [
          {
            "request_contact": true,
            "text": "{{buttonText}}"
          }
        ]
      ],
      "one_time_keyboard": false,
      "resize_keyboard": true
    },
    "ua": {
      "text": "Вітаємо! Авторизуйтесь, будь ласка, за номером телефону, щоб користуватися сервісом NaftaGO.",
      "buttonText": "Надати телефон"
    },
    "ru": {
      "text": "Приветствуем! Авторизируйтесь, пожалуйста, по номеру телефона, чтобы использовать сервис NaftaGO.",
      "buttonText": "Предоставить телефон"
    },
    "en": {
      "text": "Greetings! Please login by phone number to use the service NaftaGO.",
      "buttonText": "Provide a phone"
    }
  },*/