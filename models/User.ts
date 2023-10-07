import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

export type UserWithComparePassword = IUser & {
  comparePassword: (candidatePassword: string) => Promise<boolean>;
};

const isEmailValidator = (str: string): boolean => {
  return validator.isEmail(str);
};

const UserSchema: Schema<IUser> = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
    validate: {
      validator: isEmailValidator,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// Rest of your code...
UserSchema.pre<IUser>("save", async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    // Handle the error, possibly by returning `false` or throwing a specific error.
    throw new Error("Password comparison failed");
  }
};

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
