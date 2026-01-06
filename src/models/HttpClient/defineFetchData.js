

export function defineFetchData(target) {
  Object.defineProperty(target, 'fetchData', {
    get() {
      return target._response;
    },
    set(newRequest) {
      target.request = newRequest;
      target._fetchData();
    }
  });
}
