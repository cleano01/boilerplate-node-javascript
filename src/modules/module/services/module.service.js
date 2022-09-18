import { AppError, code_validate } from "../../../common/errors";
import { helper_error } from "../../../common/helpers";
import { handlers, repositories } from "../index";

const mod_service = () => {
  handlers.module_handler.mod_handler();
  const response = repositories.mod_repository.mod_repository();
  return response;
};

const mod_service_error = () => {
  throw new AppError(
    helper_error.get_message_error(code_validate.MOD_VALIDATE_2)
  );
};

const mod_service_validator = () => {
  return { message: "module.service.validator" };
};

export { mod_service, mod_service_error, mod_service_validator };
