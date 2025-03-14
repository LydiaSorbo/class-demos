import { assert } from 'chai'
import request from 'supertest'

// I want to test item.js so I import that too
import app from '../app.js'

describe ('Items integration test (with db)', function (){
    it("should get items from the db for GET requests", async function(){
        const res = await request(app).get('/items')

        assert.equal(res.statusCode, 200)
        assert.equal(res.type, "application/json")

        assert.isArray(res.body)
        assert.include(res.body[0], {
            name: "Orange",
            price: 1.5
        })

    })
})