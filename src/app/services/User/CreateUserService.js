class CreateUserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(data) {
    try {
      await userRepository.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = CreateUserService;
