import type { Identifiable } from '@/service/Identifiable'

export default class Product implements Identifiable {
  public id: number;
  public title: string;
  public description: string;
  public thumbnail: string;
  public brand: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.thumbnail = data.thumbnail;
    this.brand = data.brand;
  }
}
