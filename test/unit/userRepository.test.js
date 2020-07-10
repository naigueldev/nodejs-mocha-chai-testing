const chai = require('chai');
const sinon = require('sinon');
const faker = require('faker');

const { expect } = chai;
const { userRepository, userModel } = require('../../src/loadModules').cradle;

describe('UserRepository', () => {
    const stubValue = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
    };
    describe('create', () => {
        it('should add a new user to the db', async () => {
            const stub = sinon.stub(userModel, 'create').returns(stubValue);
            const user = await userRepository.create(stubValue.name, stubValue.email);

            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });
});
