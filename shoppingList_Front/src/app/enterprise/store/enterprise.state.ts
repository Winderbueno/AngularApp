//#region This
import { IncomeTaxRow } from "../model/income-tax-row.model";
//#endregion

/* State */
export interface EnterpriseState {
  
  /* Income Tax State */
  incomeTaxDataSource: IncomeTaxRow[],
  thresholds: number[],
  rates: number[]
}

/* Initial State */
export const initialState: EnterpriseState = {

  /* Income Tax State */
  incomeTaxDataSource: [{ range: 'Total', rate:0, amount: 0 }],
  thresholds: [10225, 26070, 74545, 160336],
  rates: [11, 30, 41, 45]
}