export default class {
  #url = null;
  #params = {
    width: null,
    height: null,
    top: null,
    left: null,
  }

  bittyInit() {
    this.api.fn.setProp("--load-hider", "1");
  }

  clear(_event, el) {
    el.value = "";
  }

  updateUrl(event, _el) {
    this.#url = event.target.value;
  }

  updateNum(event, _el) {
    const key = event.target.dataset.key;
    this.#params[key] = parseInt(event.target.value, 10);
  }

  launch(_event, _el) {
    const params = `popup,noopener,noreferrer${this.params()}`;
    window.open(this.#url, "popup_window", params);
  }

  params() {
    const items = Object.entries(this.#params)
      .filter((item) => item[1] !== null)
      .map((item) => {
        return `${item[0]}=${item[1]}`
    }).join(",");
    if (items !== "") {
      return `,${items}`;
    } else {
      return "";
    }
  }
};

