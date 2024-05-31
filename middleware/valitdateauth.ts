import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const validationConfirm = [
  check('email').exists().isEmail().withMessage('El email no es valido'),
  check('password').isLength({ min: 8, max: 15 }).withMessage('La contraseña debe tener entre 8 y 15 caracteres')
  .custom((value, { req }) => value == req.body.confirmPassword).withMessage('Las contraseñas no coinciden')

];

function validateAuth(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

export { validationConfirm, validateAuth };
