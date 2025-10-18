import mongoose from "mongoose";

// تعریف اسکیمای ادمین
const adminSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, sparse: true },
    password: { type: String },
    mobile: { type: String, unique: true, sparse: true },
    otpCode: { type: String },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("Admin", adminSchema);

export const adminRepository = {
  async findByEmail(email) {
    return await AdminModel.findOne({ email });
  },

  async findByMobile(mobile) {
    return await AdminModel.findOne({ mobile });
  },

  async findAll() {
    return await AdminModel.find();
  },

  async create(adminData) {
    const admin = new AdminModel(adminData);
    return await admin.save();
  },

  async update(id, data) {
    return await AdminModel.findByIdAndUpdate(id, data, { new: true });
  },

  async remove(id) {
    return await AdminModel.findByIdAndDelete(id);
  },

  async updateOtp(mobile, otpCode) {
    return await AdminModel.findOneAndUpdate({ mobile }, { otpCode }, { new: true });
  },
};
