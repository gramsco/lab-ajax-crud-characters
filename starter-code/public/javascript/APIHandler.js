class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get('http://localhost:8000/characters')
  }

  getOneRegister() {

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}

