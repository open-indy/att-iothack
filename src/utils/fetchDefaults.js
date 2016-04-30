const defaults = {
  credentials: 'same-origin',
  method: 'POST',
  headers: {
    'x-csrf-token': window.rjstools.cToken,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const generateFetchOptions = (options) => {
  if(options){
    if(!options.headers){
      return Object.assign({}, defaults, options);
    }
  }

  return defaults;
};

export default generateFetchOptions;
