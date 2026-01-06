

export function defineIsLoading(target) {
  Object.defineProperty(target, 'isLoading', {
        get: function() {
            return this._isLoading;
        },
        set: function(param) {
            this._isLoading = param;
        }
  });
}
