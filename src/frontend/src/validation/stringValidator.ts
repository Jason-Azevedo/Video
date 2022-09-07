import { IValidationResult } from "./IValidationResult";

export interface IStringValidatorConfig {
  maxLength?: number;
  notEmpty?: boolean;
  regex?: string;
}

export function validateString(
  config: IStringValidatorConfig,
  data: string
): IValidationResult {
  let result: IValidationResult = { failed: false, reason: "", message: "" };

  // Contents are larger than max length
  if (config.maxLength && data.length > config.maxLength) {
    return {
      failed: true,
      reason: "ExceededMaxLength",
      message: `Length cannot exceed ${config.maxLength} characters.`,
    };
  }

  // Content is empty
  if (config.notEmpty && data.trim() === "") {
    return {
      failed: true,
      reason: "Empty",
      message: "Cannot be empty.",
    };
  }

  return result;
}
