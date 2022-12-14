const xss = require("xss");

exports.generateHTML = (username) => {
  return `
    <body>
      username: ${username}
    </body>
  `;
};

/**
 * 基于用户搜索内容返回 /search 页面内容
 * @param {string} search
 */
exports.generateSearchHTML = (search = "") => {
  return `
    <body>
      <form
        action="http://localhost:3000/search"
        method="GET"
        enctype="application/json"
      >
        搜索：<input class="search-input" name="search" type="text" />
        <br />
        搜索内容：${search}
        <br />
        <button class="confirm-button" type="submit">确认</button>
      </form>
    </body>
  `;
};

/**
 * 转义字符串
 * @param {string} originStr
 * @returns
 */
const escape = (originStr) => {
  let str = originStr;
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&#x27;");
  str = str.replace(/\//g, "&#x2F;");
  return str;
};

/**
 * 基于用户搜索内容返回 /search 页面内容
 * @param {string} search
 */
exports.generateSearchHTMLWithEscape = (search = "") => {
  return `
    <body>
      <form
        action="http://localhost:3000/v2/search"
        method="GET"
        enctype="application/json"
      >
        搜索：<input class="search-input" name="search" type="text" />
        <br />
        搜索内容：${escape(search)}
        <br />
        <button class="confirm-button" type="submit">确认</button>
      </form>
    </body>
  `;
};

/**
 * 基于用户搜索内容返回 /search 页面内容
 * @param {string} search
 */
exports.generateSearchHTMLByXSS = (search = "") => {
  return `
    <body>
      <form
        action="http://localhost:3000/v3/search"
        method="GET"
        enctype="application/json"
      >
        搜索：<input class="search-input" name="search" type="text" />
        <br />
        搜索内容：${xss(search)}
        <br />
        <button class="confirm-button" type="submit">确认</button>
      </form>
    </body>
  `;
};
