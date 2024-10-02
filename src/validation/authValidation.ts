import { IAuth, IAuthRequest } from "../interface/IAuth";
import { validateFields, validationEmail } from "../utils/validation.util";

export const AuthValidation = (formData: IAuthRequest): { [key: string]: string } => {
    const rules = {
        usuario: {
            required: true,
            validate: validationEmail,
            length: 3,
        },
        senha: {
            required: true,
            length: 3,
        }
    };

    return validateFields(formData, rules);
};
