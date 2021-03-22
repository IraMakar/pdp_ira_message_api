const axios = require("axios");

const texts = {
  uk: {
    text1: "Гортай і вибирай картину👆",
    button_1: "<-",
    button_2: "->",
    button_3: "Ця",
    button_4: "Повернутись назад"
  },
  ru: {
    text1: "Листай и выбирай картину👆",
    button_1: "<-",
    button_2: "->",
    button_3: "Эта",
    button_4: "Bернуться обратно"
  },
  en: {
    text1: "Flip and choose a picture👆",
    button_1: "<-",
    button_2: "->",
    button_3: "This",
    button_4: "Go back"
  },
};

const artDeletePictures = async (params) => {
  const { chat_id, templateVars, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        //photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Photoshop-screenshot.JPG/1200px-Photoshop-screenshot.JPG",
        caption: `Картина\n${templateVars.name}\nОпис: ${templateVars.description}\nРозмір ${templateVars.height}х${templateVars.width}\nХудожник:${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        //caption: "Картина\n${templateVars.name}\nОпис:",
        reply_markup: {
            inline_keyboard: [
              [
                {
                  text: texts[lang].button_1,
                  callback_data: "backPicture",
                },
                {
                  text: texts[lang].button_3,
                  callback_data: `deletePicture_${templateVars.picture_id}`,
                },
                {
                  text: texts[lang].button_2,
                  callback_data: "nextPicture",
                },
              ],
              [
                {
                  text: texts[lang].button_4,
                  callback_data: "actionsWithPictures",
                },
              ],
              
            ],
          },
      }
    )
  ).data;
};

module.exports = {
  artDeletePictures,
};
