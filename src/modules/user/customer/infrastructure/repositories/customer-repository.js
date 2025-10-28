// infrastructure/repositories/customer-repository.js
import { CustomerModel } from "../models/customer-model.js";
import { Customer } from "../../domain/entities/customer-entity.js";

export class CustomerRepository {
  async create(data) {
    const doc = await CustomerModel.create(data);
    return new Customer({ ...doc.toObject(), id: doc._id.toString() });
  }

  async findByEmail(email) {
    const doc = await CustomerModel.findOne({ email });
    return doc ? new Customer({ ...doc.toObject(), id: doc._id.toString() }) : null;
  }

  async findByMobile(mobile) {
    const doc = await CustomerModel.findOne({ mobile });
    return doc ? new Customer({ ...doc.toObject(), id: doc._id.toString() }) : null;
  }

  async findById(id) {
    const doc = await CustomerModel.findById(id);
    return doc ? new Customer({ ...doc.toObject(), id: doc._id.toString() }) : null;
  }

  async save(customer) {
    await CustomerModel.findByIdAndUpdate(customer.id, customer, { new: true });
    return customer;
  }
}
