import User, { IUser } from "../../models/auth/user.model";

class AuthRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email });
  }

  async findByGoogleId(googleId: string): Promise<IUser | null> {
    return await User.findOne({ googleId });
  }

  async createUser(userData: Partial<IUser>): Promise<IUser> {
    return await User.create(userData);
  }

  async updateUser(
    id: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, userData, {
      new: true,
    });
  }

  async updateGoogleUser(
  googleId: string,
  userData: Partial<IUser>
): Promise<IUser> {
  const user = await User.findOneAndUpdate(
    { googleId },
    userData,
    { new: true }
  );

  if (!user) {
    throw new Error("User update failed");
  }

  return user;
}
async findById(id: string): Promise<IUser | null> {
  return await User.findById(id);
}

}


export default new AuthRepository();