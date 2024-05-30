import type { Identifiable } from '@/service/Identifiable'

export default class Product implements Identifiable {
  public id: number;
  public title: string;
  public description: string;
  public category: string;
  public price: string;
  public availabilityStatus: string;
  public brand: string;
  public dimensions: any;
  public discountPercentage: number;
  public images: any;
  public meta: any;
  public minimumOrderQuantity: number;
  public rating: number;
  public returnPolicy: string;
  public reviews: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.price = data.price;
    this.availabilityStatus = data.availabilityStatus;
    this.brand = data.brand;
    this.dimensions = data.dimensions;
    this.discountPercentage = data.discountPercentage;
    this.images = data.images;
    this.meta = data.meta;
    this.minimumOrderQuantity = data.minimumOrderQuantity;
    this.rating = data.rating;
    this.returnPolicy = data.returnPolicy;
    this.reviews = data.reviews;
  }
}
