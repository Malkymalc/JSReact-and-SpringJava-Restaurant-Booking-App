export default class RequestHelper {

  get(url){
    return fetch(url)
    .then(res => res.json())
    ;
  }

  delete(url){
    return fetch(url, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }

  post(url, payload){
    console.log(url);
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
  }

  put(url, payload) {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
  };
}
