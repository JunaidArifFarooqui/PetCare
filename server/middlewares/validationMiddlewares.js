import { body, validationResult } from "express-validator";

export const validateAdminRegistration = [
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("A valid email is required."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters."),
  body("role").notEmpty().withMessage("Role is required."),
  body("title").notEmpty().withMessage("Title is required."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
