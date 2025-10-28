// domain/entities/customer-entity.js

export class Customer {
    constructor({
      id,
      name,
      email,
      mobile,
      password,
      roles = ["customer"],
      isVerified = false,
      isBlocked = false,
      refreshTokens = []
    }) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.mobile = mobile;
      this.password = password;
      this.roles = roles;
      this.isVerified = isVerified;
      this.isBlocked = isBlocked;
      this.refreshTokens = refreshTokens;
    }
  
    verify() {
      this.isVerified = true;
    }
  
    block() {
      this.isBlocked = true;
    }
  
    unblock() {
      this.isBlocked = false;
    }
  
    addRefreshToken(token) {
      if (!this.refreshTokens) this.refreshTokens = [];
      this.refreshTokens.push(token);
    }
  
    removeRefreshToken(tokenValue) {
      if (!Array.isArray(this.refreshTokens)) return;
      this.refreshTokens = this.refreshTokens.filter(rt => {
        if (typeof rt === "string") return rt !== tokenValue;
        if (typeof rt === "object" && rt.token) return rt.token !== tokenValue;
        return true;
      });
    }
  
    clearAllRefreshTokens() {
      this.refreshTokens = [];
    }
  }
  