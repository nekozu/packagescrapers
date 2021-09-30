const axios = require('axios')
const cheerio = require('cheerio')

const AXIOS_OPTIONS = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 9; ASUS_X00TD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
  },
};

  function npm(query) {
  return axios
    .get(
      `https://www.npmjs.com/search?q=${query}`,
      AXIOS_OPTIONS
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)
     
      const title = []
      const url = []
      
    $("._0d2164ff > div > a > h3").each((i, el) => {
        title[i] = $(el).text();
      })

     $("._0d2164ff > div > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
        result[i] = {
          title: title[i],
          link: 'https://npmjs.com'+url[i]
        };
      }
      return(result);
    });
}
  
  function pypi(q) {
  return axios
    .get(
      `https://pypi.org/search/?q=${q}`,
      AXIOS_OPTIONS
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)
     
      const title = []
      const url = []
      
    $(".package-snippet__name").each((i, el) => {
        title[i] = $(el).text();
      })

     $(".unstyled > li > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
        result[i] = {
          title: title[i],
          link: 'https://pypi.org'+url[i]
        };
      }
      return(result);
    });
}


  function github(search) {
  return axios
    .get(
      `https://github.com/search?q=${search}&type=Repositories`,
      AXIOS_OPTIONS
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)
     
      const title = []
      const url = []
      
    $(".d-flex > div > a").each((i, el) => {
        title[i] = $(el).text();
      })

     $(".d-flex > div > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
        result[i] = {
          title: title[i],
          link: 'https://github.com'+url[i]
        };
      }
      return(result);
    });
}

module.exports = { github, npm, pypi }
