import { expect } from 'chai';
import { describe, it } from 'mocha';
import { sendRequest } from "../helper/api.helper";
import testData from "../config/data/data.json";
import putTestData from "../config/data/put_data.json";

describe("API Test Suite", () => {

    it("POST posts", async () => {
        const response = await sendRequest('posts', testData, 'post');
        expect(response.status, `POST status is not equal 201`).to.equal(201);
        expect(response.data.body, `POST body is not equal 'bar'`).to.equal('bar');
        expect(response.data.id, `POST data id is not equal 101`).to.equal(101);
        expect(response.data.title, `POST title is not equal 'foo'`).to.equal('foo');
        expect(response.data.userId, `POST user id is not equal 1`).to.equal(1);
    });

    it("Get post/1", async () => {
        const response = await sendRequest('posts/1');
        expect(response.data.userId, `UserId is not equal 1`).to.equal(1);
        expect(response.status, `The response status is not equal 200`).to.equal(200);
        expect(response.data.title, `The response title is not a string or has lengthOf below 3000 symbols`).to.be.a('string').to.have.lengthOf.below(3000);
        expect(response.data.body, `The response body is not a string  or has lengthOf below 3000 symbols`).to.be.a('string').to.have.lengthOf.below(3000);
    });

    it("PUT posts", async () => {
        const response = await sendRequest('posts/1', putTestData, 'put');
        expect(response.status, `PUT status is not equal 200`).to.equal(200);
        expect(response.data.title, `The response title is not equal 'foo1'`).to.equal('foo1');
        expect(response.data.body, `The response body is not equal 'bar1'`).to.equal('bar1');
        expect(response.data.id, `The data id is not equal 1`).to.equal(1);
        expect(response.data.userId, `The user id is not equal 1`).to.equal(1);
    });

    it("Delete posts", async () => {
        const response = await sendRequest('posts/1', 'delete');
        expect(response.status, `Delete status is not equal 200`).to.equal(200);
    });

    it("Negative test", async () => {
        const responsePost = await sendRequest('post', testData, 'post');
        expect(responsePost.status, `Wrong post endpoint should return 404 response status`).to.equal(404);

        const responseGet = await sendRequest('posts/321321321321');
        expect(responseGet.status, `Wrong get endpoint should return 404 response status`).to.equal(404);

        const responsePut = await sendRequest('post/1', putTestData, 'put');
        expect(responsePut.status, `Wrong put endpoint should return 404 status`).to.equal(404);

        const responseDel = await sendRequest('posts/654654', 'delete');
        expect(responseDel.status, `Wrong put endpoint should return 404 status`).to.equal(404);

        const responseOpt = await sendRequest('posts/1', putTestData, '123post');
        expect(responseOpt.status, `Wrong method should return 400 response status`).to.equal(400);

    });
});
