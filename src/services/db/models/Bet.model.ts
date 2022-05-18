import {
  Table,
  Column,
  Model,
  ForeignKey,
  CreatedAt,
  Default,
  UpdatedAt,
  Min,
  Max,
} from "sequelize-typescript";
import User from "./User.model";

@Table
class Bet extends Model {
  // @Column
  // id!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @Min(0)
  @Column
  betAmount!: number;

  @Min(0)
  @Max(100)
  @Column
  chance!: number;

  @Column
  payout!: number;

  @Column
  win!: boolean;

  @CreatedAt
  @Default(Date.now())
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Default(Date.now())
  @Column
  updatedAt?: Date;
}

export default Bet;
