export class ITodoRepository {
  save() {
    throw new Error("Not implemented");
  }

  find() {
    throw new Error("Not implemented");
  }

  fetch() {
    throw new Error("Not implemented");
  }

}

export class TodoLocalStorageRepository extends ITodoRepository {
  __getItems() {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem("todos")) : [];
  }

  save(model) {
    return new Promise((resolve) => {
      let items = this.__getItems();
      items.push(model);
      localStorage.setItem("todos", JSON.stringify(items));
      resolve(model);
    })
  }

  find(id) {
    return new Promise((resolve) => {
      let items = this.__getItems();
      const res = items.filter((item) => {
        return item.id === id
      });
      if (res.length > 0) {
        return resolve(res[0]);
      }
      return resolve(null);
    })
  }

  fetch() {
    return new Promise((resolve) => {
      resolve(this.__getItems());
    })
  }
}
