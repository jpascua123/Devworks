self.__uv$config = {
  prefix: '/service/',
  bare: 'https://uv.bypass.workers.dev/',
  encodeUrl: (input) => btoa(input),
  decodeUrl: (input) => atob(input),
};
