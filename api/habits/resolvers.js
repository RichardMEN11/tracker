export const habitsResolvers = {
  Query: {
    async habits() {
      console.log("habits");
      return [
        {
          _id: "id",
          name: "make my bed"
        }
      ];
    }
  }
};
