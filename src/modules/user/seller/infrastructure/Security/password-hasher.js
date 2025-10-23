/**
 * وظیفه: هش و بررسی رمز عبور با استفاده از bcrypt برای امنیت بالا.
 */

import bcrypt from "bcrypt";

export class PasswordHasher {
  async hash(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async compare(plain, hashed) {
    return await bcrypt.compare(plain, hashed);
  }
}
