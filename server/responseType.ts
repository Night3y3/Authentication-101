type ResponseTypeProps = {
  [key: number]: {
    httpstatus: number;
    message: string;
    type: string;
  };
};

const responseType: ResponseTypeProps = {
  200: {
    httpstatus: 200,
    message: "Successfully loaded data",
    type: "OK",
  },
  201: {
    httpstatus: 201,
    message: "Successfully created entry",
    type: "Created",
  },
  202: {
    httpstatus: 202,
    message: "Successfully accepted entry",
    type: "Accepted",
  },
  204: {
    httpstatus: 204,
    message: "There is no content available for the same",
    type: "No Content",
  },
  400: {
    httpstatus: 400,
    message: "Bad request",
    type: "Bad request",
  },
  401: {
    httpstatus: 401,
    message: "Unauthorized",
    type: "Unauthorized",
  },
  402: {
    httpstatus: 402,
    message: "Payment Required",
    type: "PaymentRequired",
  },
  403: {
    httpstatus: 403,
    message: "Forbidden",
    type: "Forbidden",
  },
  404: {
    httpstatus: 404,
    message: "Request resource does not exist",
    type: "Not Found",
  },
  405: {
    httpstatus: 405,
    message: "Request method not allowed",
    type: "Method Not Allowed",
  },
  406: {
    httpstatus: 406,
    message: "Request resource is not acceptable",
    type: "Not Acceptable",
  },
  407: {
    httpstatus: 407,
    message: "Proxy Authentication Required",
    type: "ProxyAuthenticationRequired",
  },
  408: {
    httpstatus: 408,
    message: "Request Timeout",
    type: "RequestTimeout",
  },
  409: {
    httpstatus: 409,
    message: "Conflict",
    type: "Conflict",
  },
  410: {
    httpstatus: 410,
    message: "Gone",
    type: "Gone",
  },
  411: {
    httpstatus: 411,
    message: "Length Required",
    type: "LengthRequired",
  },
  412: {
    httpstatus: 412,
    message: "Precondition Failed",
    type: "PreconditionFailed",
  },
  413: {
    httpstatus: 413,
    message: "Payload Too Large",
    type: "PayloadTooLarge",
  },
  414: {
    httpstatus: 414,
    message: "URI Too Long",
    type: "URITooLong",
  },
  415: {
    httpstatus: 415,
    message: "Unsupported Media Type",
    type: "UnsupportedMediaType",
  },
  416: {
    httpstatus: 416,
    message: "Range Not Satisfiable",
    type: "RangeNotSatisfiable",
  },
  417: {
    httpstatus: 417,
    message: "Expectation Failed",
    type: "ExpectationFailed",
  },
  418: {
    httpstatus: 418,
    message: "I'm a teapot",
    type: "ImATeapot",
  },
  421: {
    httpstatus: 421,
    message: "Misdirected Request",
    type: "MisdirectedRequest",
  },
  422: {
    httpstatus: 422,
    message: "Unprocessable Entity",
    type: "UnprocessableEntity",
  },
  423: {
    httpstatus: 423,
    message: "Locked",
    type: "Locked",
  },
  424: {
    httpstatus: 424,
    message: "Failed Dependency",
    type: "FailedDependency",
  },
  425: {
    httpstatus: 425,
    message: "Too Early",
    type: "TooEarly",
  },
  426: {
    httpstatus: 426,
    message: "Upgrade Required",
    type: "UpgradeRequired",
  },
  428: {
    httpstatus: 428,
    message: "Precondition Required",
    type: "PreconditionRequired",
  },
  429: {
    httpstatus: 429,
    message: "Too Many Requests",
    type: "TooManyRequests",
  },
  431: {
    httpstatus: 431,
    message: "Request Header Fields Too Large",
    type: "RequestHeaderFieldsTooLarge",
  },
  451: {
    httpstatus: 451,
    message: "Unavailable For Legal Reasons",
    type: "UnavailableForLegalReasons",
  },
  500: {
    httpstatus: 500,
    message: "An unknown error occurred.",
    type: "Server Error",
  },
  501: {
    httpstatus: 501,
    message: "Not Implemented",
    type: "NotImplemented",
  },
  502: {
    httpstatus: 502,
    message: "Bad Gateway",
    type: "BadGateway",
  },
  503: {
    httpstatus: 503,
    message: "Service Unavailable",
    type: "ServiceUnavailable",
  },
  504: {
    httpstatus: 504,
    message: "Gateway Timeout",
    type: "GatewayTimeout",
  },
  505: {
    httpstatus: 505,
    message: "HTTP Version Not Supported",
    type: "HTTPVersionNotSupported",
  },
  506: {
    httpstatus: 506,
    message: "Variant Also Negotiates",
    type: "VariantAlsoNegotiates",
  },
  507: {
    httpstatus: 507,
    message: "Insufficient Storage",
    type: "InsufficientStorage",
  },
  508: {
    httpstatus: 508,
    message: "Loop Detected",
    type: "LoopDetected",
  },
  509: {
    httpstatus: 509,
    message: "Bandwidth Limit Exceeded",
    type: "BandwidthLimitExceeded",
  },
  510: {
    httpstatus: 510,
    message: "Not Extended",
    type: "NotExtended",
  },
  511: {
    httpstatus: 511,
    message: "Network Authentication Required",
    type: "NetworkAuthenticationRequired",
  },
};

// Example usage
console.log(responseType[404]); // Output: { httpstatus: 404, message: "Request resource does not exist", type: "Not Found" }
