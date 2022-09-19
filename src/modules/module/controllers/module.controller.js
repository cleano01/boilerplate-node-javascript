import httpStatus from "http-status";
import { helper_serializer } from "../../../common/helpers/index.js";
import { services } from "../index.js";

const module = (req, res, next) => {
  try {
    const mod = services.mod_service.mod_service();
    const response = helper_serializer.serializer("module", mod);
    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    next(error);
  }
};

const module_error = (req, res, next) => {
  try {
    const mod = services.mod_service.mod_service_error();
    const response = helper_serializer.serializer("module", mod);
    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    next(error);
  }
};

const module_service_validator = (req, res, next) => {
  try {
    const mod = services.mod_service.mod_service_validator();
    const response = helper_serializer.serializer("module", mod);
    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    next(error);
  }
};

export { module, module_error, module_service_validator };
