exports.generateHTML = (username) => {
  return `
    <body>
      username: ${username}
    </body>
  `;
};

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
