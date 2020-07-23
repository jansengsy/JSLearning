class Storage {
  loadCity() {
    if (localStorage.getItem('city') === null) {
    } else {
      return localStorage.getItem('city');
    }
  }

  storeCity(city) {
    localStorage.setItem('city', city);
  }
}
