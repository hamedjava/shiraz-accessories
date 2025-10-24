// infrastructure/repositories/customer-repository.js
import { Customer } from "../../../customer/domain/entities/customer-entity.js";
import { CustomerModel } from "../../../customer/infrastructure/models/customer-model.js";

export class CustomerRepository {
    async save(entity) {
        const doc = new CustomerModel({
            name: entity.name,
            mobile: entity.mobile,
            email: entity.email,
            password: entity.password,
            isVerified: entity.isVerified,
            roles: entity.roles,
            refreshToken: entity.refreshToken
        });
        const saved = await doc.save();
        return this._toEntity(saved);
    }

    async findByMobile(mobile) {
        const doc = await CustomerModel.findOne({ mobile });
        return doc ? this._toEntity(doc) : null;
    }

    async findByEmail(email) {
        const doc = await CustomerModel.findOne({ email });
        return doc ? this._toEntity(doc) : null;
    }

    async findById(id) {
        const doc = await CustomerModel.findById(id);
        return doc ? this._toEntity(doc) : null;
    }

    async getAll() {
        const docs = await CustomerModel.find();
        return docs.map(d => this._toEntity(d));
    }

    async update(id, updates) {
        const doc = await CustomerModel.findByIdAndUpdate(id, updates, { new: true });
        return doc ? this._toEntity(doc) : null;
    }

    async delete(id) {
        return await CustomerModel.findByIdAndDelete(id);
    }

    async updateRefreshToken(id, token) {
        const updated = await CustomerModel.findByIdAndUpdate(id, { refreshToken: token }, { new: true });
        return updated ? this._toEntity(updated) : null;
    }

    async invalidateSession(id) {
        const updated = await CustomerModel.findByIdAndUpdate(id, { $unset: { refreshToken: 1 } }, { new: true });
        return updated ? this._toEntity(updated) : null;
    }

    _toEntity(doc) {
        return new Customer({
            id: doc._id.toString(),
            name: doc.name,
            mobile: doc.mobile,
            email: doc.email,
            password: doc.password,
            isVerified: doc.isVerified,
            roles: doc.roles,
            refreshToken: doc.refreshToken,
            createdAt: doc.createdAt
        });
    }
}
