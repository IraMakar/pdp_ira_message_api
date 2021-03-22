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

const showStatisticByArtist = async (params) => {
  const { chat_id, lang, templateVars } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: `Статистика:
        Використовуючи пошук за нікнеймом художника ваші картини було знайдено ${templateVars.byArtistSearchType} разів
        Використовуючи пошук за категоріями ваші картини було знайдено ${templateVars.byCategorySearchType} разів
        Використовуючи пошук за розмірами ваші картини було знайдено ${templateVars.bySizeSearchType} разів
        Використовуючи пошук за хештегами ваші картини було знайдено ${templateVars.byHashtagSearchType} разів
        Статистика ефективності хештегів:
        ${templateVars.HashtagStatisticByArtist.map(hashtag => `#${hashtag.Hashtag.tag} - ${hashtag.countByHashtag} разів`).join('\n')}
        Статистика знаходжень за категоріями:
        ${templateVars.CategoryStatisticByArtist.map(category => `${category.category.settings[lang]} - ${category.countByCategory} разів`).join('\n')}
        Статистика переглядів по картинах:
        ${templateVars.PicturesStatisticByArtist.map(picture => `${picture.name}: переглянуто - ${picture.countViewByPicture}, вподобано - ${picture.countLikesByPicture}`).join('\n')}
        Статистика переглядів за нікнеймами:
        ${templateVars.NicknameStatisticByArtist.map(nickname => `${nickname.nickname} - ${nickname.countByNickname}`).join('\n')}
        `,
        reply_markup: {
            inline_keyboard: [
              [
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
    showStatisticByArtist,
};
