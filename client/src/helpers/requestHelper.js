export default class RequestHelper {

  constructor(){
    this.host = 'http://localhost:8080'
  }

  get(url){
    const fullUrl = this.host + url;
    return fetch(fullUrl)
    .then(res => res.json())
    ;
  }

  delete(url){
    const fullUrl = this.host + url;
    return fetch(fullUrl, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }

  post(url, payload){
    const fullUrl = this.host + url;
    return fetch(fullUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
  }

  put(url, payload) {
    const fullUrl = this.host + url;
    return fetch(fullUrl, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
  };
}
