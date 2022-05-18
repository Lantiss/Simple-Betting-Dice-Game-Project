import Bet from "../../services/db/models/Bet.model";
import User from "../../services/db/models/User.model";

export const resolvers = {
  Query: {
    async getBet(_: any, { id }: { id: number }) {
      return await Bet.findByPk(id);
    },
    async getBetList() {
      return await Bet.findAll();
    },
    async getBestBetPerUser(_: any, { limit = 10 }: { limit: number }) {
      return null;
    },
  },
  Mutation: {
    async createBet(
      _: any,
      {
        userId,
        betAmount,
        chance,
      }: { userId: number; betAmount: number; chance: number }
    ) {
      const win = Math.random() * 100 < chance;
      const payout = win ? betAmount : betAmount * -1;
      const bet = {
        userId,
        betAmount,
        chance,
        payout,
        win,
      };

      const newBet = await Bet.create(bet);
      let user = await User.findByPk(userId);
      user!.balance += payout;
      user!.save();
      return newBet;
    },
  },
};
