import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  Default,
  // Min,
} from "sequelize-typescript";

@Table
class User extends Model {
  // @Column
  // id!: number;

  @Column
  name!: string;

  // @Min(0)
  @Column
  balance!: number;

  @CreatedAt
  @Default(Date.now())
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Default(Date.now())
  @Column
  updatedAt?: Date;
}

export default User;
