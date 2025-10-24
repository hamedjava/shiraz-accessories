// domain/entities/customer.js
export class Customer {
    constructor({ id, name, mobile, email, password, isVerified, roles, refreshToken, createdAt }) {
      this.id = id;
      this.name = name ?? "";
      this.mobile = mobile ?? null;
      this.email = email ?? null;
      this.password = password ?? null;
      this.isVerified = isVerified ?? false;
      this.roles = roles ?? ["customer"];
      this.refreshToken = refreshToken ?? null;
      this.createdAt = createdAt ?? new Date();
    }
  
    verify() { this.isVerified = true; }
    setRefreshToken(token) { this.refreshToken = token; }
    revokeToken() { this.refreshToken = null; }
    isAdmin() { return this.roles.includes("admin"); }
  }
  