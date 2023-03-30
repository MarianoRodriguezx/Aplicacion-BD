/*eslint-disable */
import { Schema, model } from "@ioc:Mongoose"

export default model('DataCollection', new Schema({
  id: String,
  NumPreg: String,
  AbortRes: String,
  SireBull: String,
  Lact: String,
  EvnL: String,
  EnEV: String,
  Date: String,
  EvGap: String,
  Tech: String,
  Pen: String,
  BredSexed: String,
  BredREas: String,
  DIME: String,
  Anld: String,
  FarmLoc: String,
  AnOwner: String,
  Brd: String,
  Ageda: String,
  Other2id: String,
  Other5id: String,
  ConcepRate: String,
  Bredunk: String,
  Evsirebreed: String,
  Evsirestudcd: String,
  Evweek: String,
  Age1blt: String,
  BarnNm: String
}))
// eslint-disable-next-line prettier/prettier
/*eslint-enable*/
