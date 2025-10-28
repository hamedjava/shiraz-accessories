// domain/usecases/customer-usecases.js
export class CustomerUseCases {
    constructor(customerRepository) {
      this.customerRepository = customerRepository;
    }
  
    async register(data) {
      // (Business rules; validations)
      const existingEmail = data.email ? await this.customerRepository.findByEmail(data.email) : null;
      const existingMobile = data.mobile ? await this.customerRepository.findByMobile(data.mobile) : null;
      if (existingEmail || existingMobile) throw new Error("کاربر با این اطلاعات وجود دارد");
      return this.customerRepository.create(data);
    }
  
    async findById(id) {
      const user = await this.customerRepository.findById(id);
      if (!user) throw new Error("کاربر یافت نشد");
      return user;
    }
  }
  