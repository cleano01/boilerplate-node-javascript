import { body } from "express-validator";

import { AppError, code_validate } from "../../../common/errors";
import { helper_error, helper_validate } from "../../../common/helpers";

export default [
  body("email")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage(
      new AppError(helper_error.get_message_error(code_validate.MOD_VALIDATE_2))
    ),
  body("password")
    .exists()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage(
      new AppError(helper_error.get_message_error(code_validate.MOD_VALIDATE_1))
    ),
  helper_validate.validate,
];
