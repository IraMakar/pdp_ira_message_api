const axios = require("axios");

const texts = {
  uk: {
    text1: "Гортай і вибирай картину👆",
    button_1: "<-",
    button_2: "->",
    button_3: "Ця",
    button_4: "Повернутись назад",
    picture: "Картина: ",
    descript: "Опис: ",
    size: "Розмір: ",
    painter: "Художник: "
  },
  ru: {
    text1: "Листай и выбирай картину👆",
    button_1: "<-",
    button_2: "->",
    button_3: "Эта",
    button_4: "Bернуться обратно",
    picture: "Картина: ",
    descript: "Описание: ",
    size: "Размер: ",
    painter: "Художник: "
  },
  en: {
    text1: "Flip and choose a picture👆",
    button_1: "<-",
    button_2: "->",
    button_3: "This",
    button_4: "Go back",
    picture: "Picture: ",
    descript: "Description: ",
    size: "Size: ",
    painter: "Painter: "
  },
};

const artEditAdvertisingAllPictures = async (params) => {
  const { chat_id, templateVars, lang, message_id, } = params;

  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/editMessageMedia`,
      {
        chat_id,
        message_id,
        media: {
          type: 'photo',
          media: templateVars.photoUrl,
          caption: `${texts[lang].picture}\n${templateVars.name}\n${texts[lang].descript}${templateVars.description}\n${texts[lang].size}${templateVars.height}х${templateVars.width}\n${texts[lang].painter}${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        },
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                callback_data: "backPicture",
              },
              {
                text: texts[lang].button_3,
                callback_data: `advertisePicture_${templateVars.picture_id}`,
              },
              {
                text: texts[lang].button_2,
                callback_data: "nextPicture",
              },
            ],
            [
              {
                text: texts[lang].button_4,
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
    artEditAdvertisingAllPictures,
};
