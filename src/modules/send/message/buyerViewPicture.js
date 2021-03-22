const axios = require("axios");

const texts = {
  uk: {
    text1: "Гортай і переглядай картини👆",
    button_1: "<-",
    button_2: "->",
    button_3: "Вподобати",
    button_6: "Вподобано❤️",
    button_4: "Повернутись назад",
    button_5: "Зацікавила",
  },
  ru: {
    text1: "Листай и выбирай картину👆",
    button_1: "<-",
    button_2: "->",
    button_3: "Эта",
    button_4: "Bернуться обратно",
    button_5: "Зацікавила",
  },
  en: {
    text1: "Flip and choose a picture👆",
    button_1: "<-",
    button_2: "->",
    button_3: "This",
    button_4: "Go back",
    button_5: "Зацікавила",
  },
};

const buyerViewPicture = async (params) => {
  const { chat_id, templateVars, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        caption: `Картина\n${templateVars.name}\nОпис: ${templateVars.description}\nРозмір ${templateVars.height}х${templateVars.width}\nХудожник:${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: templateVars.liked ? texts[lang].button_6 : texts[lang].button_3,
                callback_data: `like_${templateVars.picture_id}`,
              },
              {
                text: texts[lang].button_5,
                callback_data: `apply_${templateVars.picture_id}`,
              },
            ],
            [
              {
                text: texts[lang].button_1,
                callback_data: "backPicture",
              },
              {
                text: texts[lang].button_2,
                callback_data: "nextPicture",
              },
            ],
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
  buyerViewPicture,
};
