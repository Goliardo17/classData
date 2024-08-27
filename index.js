class Data {
  constructor(places) {
    this.places = [...places];
    this.data = [];
  }

  _createRec(form) {
    const keys = this.places;
    const result = new Object();

    for (let key of keys) {
      result[key] = form[key] ? form[key] : null;
    }

    return result;
  }

  _validKey(value) {
    return this.places.includes(String(value));
  }

  _filterData(filter) {
    const filterKeys = Object.keys(filter);
    const filterLength = filterKeys.length;

    const result = this.data.filter((item) => {
      let i = 0;

      for (let key of filterKeys) {
        if (item[key] === filter[key]) {
          i++;
        }
      }

      return i === filterLength;
    });

    return result;
  }

  _configForm(places = this.places, data) {
    console.log("формирует ответ");
  }

  insert(form) {
    const rec = this._createRec(form);
    this.data.push(rec);
  }

  update(keyFilter, newState) {
    if (!this._validKey(keyFilter)) throw new Error("err key");
    if (this.data.length < 1) return;

    const newData = this.data.map((item) => {
      if (item[keyFilter] !== newState[keyFilter]) return item;

      const itemKeys = Object.keys(item);

      for (let key of itemKeys) {
        if (key !== "id") {
          item[key] = newState[key] ? newState[key] : item[key];
        }
      }

      return item;
    });

    this.data = newData;
  }

  select(selectObject) {
    if (!selectObject?.filter) throw new Error("filter error");

    const filteredData = this._filterData(selectObject.filter);

    if (selectObject?.places) {
      const formRes = this._configForm(selectObject.places, filteredData);

      return formRes;
    }

    return filteredData;
  }
}
