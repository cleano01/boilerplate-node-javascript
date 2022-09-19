import { message_validate } from "../errors/index.js";

const get_message_error = (code) => {
  const data_error = message_validate.filter(
    (error) => (error.code || "E0001") === code
  )[0];
  return { ...data_error };
};

export { get_message_error };
