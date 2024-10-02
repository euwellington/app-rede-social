import { IPublicacaoRequest } from "../interface/IPublicacao";
import { validateFields, validationEmail } from "../utils/validation.util";

export const PublicacaoValidation = (formData: IPublicacaoRequest): { [key: string]: string } => {
    const rules = {
        title: {
            required: true,
            length: 5,
        },
        body: {
            required: true,
            length: 10
        }
    };

    return validateFields(formData, rules);
};
