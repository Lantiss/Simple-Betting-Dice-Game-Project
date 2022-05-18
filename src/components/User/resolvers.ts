import User from "../../services/db/models/User.model";

export const resolvers = {
  Query: {
    async getUser(_: any, { id }: { id: number }) {
      return await User.findByPk(id);
    },
    async getUserList() {
      return await User.findAll();
    },
  },
  Mutation: {
    async createUser(_: any, { name }: { name: string }) {
      return await User.create({ name, balance: 0 });
    },
  },
};
