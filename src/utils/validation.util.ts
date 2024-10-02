export const validationCPF = (cpf: string | undefined): boolean | string => {
    if (typeof cpf !== 'string') {
      return 'CPF inválido'; // Mensagem de erro para tipo inválido
    }
  
    const cleanedCPF = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    if (cleanedCPF.length === 0) {
      return true; // CPF não fornecido, sem erro
    }
  
    if (cleanedCPF.length < 11) {
      return 'CPF incompleto'; // Mensagem de erro para CPF incompleto
    }
  
    if (cleanedCPF.length > 11) {
      return 'CPF deve ter exatamente 11 dígitos'; // Mensagem de erro para comprimento excessivo
    }
  
    if (/^(\d)\1{10}$/.test(cleanedCPF)) {
      return 'CPF inválido'; // Mensagem de erro para CPF inválido
    }
  
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
    }
    const firstDigit = (sum * 10) % 11;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
    }
    const secondDigit = (sum * 10) % 11;
  
    if (
      parseInt(cleanedCPF.charAt(9)) !== (firstDigit === 10 ? 0 : firstDigit) ||
      parseInt(cleanedCPF.charAt(10)) !== (secondDigit === 10 ? 0 : secondDigit)
    ) {
      return 'CPF inválido'; // Mensagem de erro para CPF inválido
    }
  
    return true; // CPF válido
  };
  
  // Valida e-mail
  export const validationEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Valida telefone (com DDD e 10 dígitos)
  export const validationPhone = (phone: string): boolean => {
    const phoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };
  
  // Valida celular (com DDD e 11 dígitos)
  export const validationCellPhone = (cellPhone: string): boolean => {
    const cellPhoneRegex = /^\(\d{2}\) \d \d{4}-\d{4}$/;
    return cellPhoneRegex.test(cellPhone);
  };
  
  // Valida RG (padrão para o Brasil)
  export const validationRG = (rg: string): boolean => {
    const rgRegex = /^\d{1,2}\.\d{3}\.\d{3}-\d{1}$/;
    return rgRegex.test(rg);
  };
  
  // Valida senha
  export const validationPassword = (password: string): boolean | string => {
    // Verifica se o comprimento é maior ou igual a 6
    if (password.length < 6) {
      return "A senha deve ter pelo menos 6 caracteres.";
    }
  
    // Verifica se há pelo menos um caractere especial
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "A senha deve conter pelo menos um caractere especial.";
    }
    
    // Verifica se há pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(password)) {
      return "A senha deve conter pelo menos uma letra maiúscula.";
    }
  
    // Verifica se há pelo menos um número
    if (!/\d/.test(password)) {
      return "A senha deve conter pelo menos um número.";
    }
  
    return true;
  };
  
  interface ValidationRule {
    required?: boolean;
    length?: number;
    validate?: (value: any) => boolean | string;
    errorMessage?: string;
  }
  
  type ValidationRules = {
    [key: string]: {
      required?: boolean;
      length?: number;
      validate?: (value: any) => boolean | string;
      errorMessage?: string;
    }
  };
  
  export const validateFields = (formData: { [key: string]: any }, rules: ValidationRules): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};
  
    Object.keys(rules).forEach(field => {
      const value = formData[field];
      const { required = false, length, validate, errorMessage } = rules[field];
  
      // Verifica se o campo é obrigatório e está ausente ou vazio
      if (required && (value === null || value === undefined || (typeof value === 'string' && value.trim() === ''))) {
        errors[field] = errorMessage || 'Campo obrigatório';
      } 
      // Verifica a quantidade mínima de caracteres
      else if (length !== undefined && typeof value === 'string' && value.trim().length < length) {
        errors[`${field}Qtd`] = `Deve ter pelo menos ${length} caracteres`;
      } 
      // Verifica a validação personalizada
      else if (validate) {
        const validationResult = validate(value);
        if (validationResult !== true) {
          errors[field] = validationResult || errorMessage || 'Valor inválido';
        }
      }
    });
  
    return errors;
  };