import { IRegisterRequest } from "../interface/IRegister";
import { validateFields, validationEmail } from "../utils/validation.util";

export const RegisterValidation = (formData: IRegisterRequest): { [key: string]: string } => {
    const rules = {
        nome: {
            required: true,
            length: 3,
        },
        email: {
            required: true,
            validate: validationEmail,
            errorMessage: 'Email inválido'
        },
        senha: {
            required: true,
            length: 3
        }
    };

    return validateFields(formData, rules);
};
