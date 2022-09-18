// Internal server erro

import error_code from "./error.code";

export default Object.freeze([
  {
    code: error_code.INTERNAL_SERVER_ERROR,
    status: 500,
    message: "Internal server error",
  },
]);
