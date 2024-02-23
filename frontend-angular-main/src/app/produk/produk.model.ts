import {ProdusenModel} from "../produsen/produsen.model";

export class ProdukModel {
  id!: number;
  nama!: string;
  jenis!: string;
  berat!: string;
  produsen!: ProdusenModel;
}
