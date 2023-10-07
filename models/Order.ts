import mongoose, { Schema, Document, Types } from "mongoose";

interface ISingleOrderItem extends Document {
  name: string;
  image: string;
  price: number;
  amount: number;
  product: Types.ObjectId | string;
}

const SingleOrderItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

interface IOrder extends Document {
  tax: number;
  shippingFee: number;
  subtotal: number;
  total: number;
  orderItems: ISingleOrderItem[];
  status: "pending" | "failed" | "paid" | "delivered" | "canceled";
  user: Types.ObjectId | string;
  clientSecret: string;
  paymentIntentId?: string;
}

const OrderSchema: Schema = new Schema(
  {
    tax: {
      type: Number,
      required: true,
    },
    shippingFee: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    orderItems: [SingleOrderItemSchema],
    status: {
      type: String,
      enum: ["pending", "Shipping", "failed", "paid", "delivered", "canceled"],
      default: "pending",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    paymentIntentId: {
      type: String,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);

export default OrderModel;
