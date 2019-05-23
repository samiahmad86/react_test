export const FETCH_HELLO = "FETCH_HELLO";
export const FETCH_ALL_ITEM = "FETCH_ALL_ITEM";

export function fetchHello(payload) {
  console.log(payload);
  return {
    type: FETCH_HELLO,
    payload
  };
}


export function fetchAllItems(payload) {
  return {
    type: FETCH_ALL_ITEM,
    payload
  };
}

export function fetchHelloRequest() {
  return dispatch => {
    return fetch("/api/hello")
      .then(res => res.json())
      .then(res => {
        dispatch(fetchHello(res.express));
      });
  };
}

export function getAllItemsRequest() {
  return dispatch => {
    return fetch("/api/items")
      .then(res => res.json())
      .then(res => {
        dispatch(fetchAllItems(res.items));
      });
  };
}



// action for sending data to server
// data object would look like this:
//  {
//   "top": "Top",
//   "bottom": "Bottom",
//   "head": "HEAD",
//   "feet": "Feet"
// }
export function sendDataRequest(data) {
  return dispatch => {
    let myHeaders = new Headers();
    myHeaders.set("Content-Type", "application/json");
    const request = new Request("/api/items", {
      method: "POST",
      body: JSON.stringify(data),
      headers: myHeaders
    });
    return fetch(request)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchData(res.express));
      });
      }
  };
