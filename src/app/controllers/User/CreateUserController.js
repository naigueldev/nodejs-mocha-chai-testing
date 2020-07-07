class CreateUserController {
  constructor({ createUserService }) {
    this.createUserService = createUserService;
  }

  handler = async (req, res, next) => {
    await this.createUserService.execute(req);
  };
}

module.exports = CreateUserController;
