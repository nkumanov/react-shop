export enum EProductSubCategory {
  T_SHIRTS = "t-shirts",
  HOODIES = "hoodies",
  SWIMWEAR = "swimwear",
}

export enum EProductCategory {
  MALE = "male",
  FEMALE = "female",
  CHILDREN = "children",
}

export interface IProductData {
  _id: string;
  category: EProductCategory;
  subCategory: EProductSubCategory;
  title: string;
  subTitle: string;
  price: string;
  description: string;
  sizes: { size: string; pieces: string }[];
  images: string[];
}
