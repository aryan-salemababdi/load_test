// models/User.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class User extends Model {
  declare id: number;
  declare name: string | null;
  declare email: string | null;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);