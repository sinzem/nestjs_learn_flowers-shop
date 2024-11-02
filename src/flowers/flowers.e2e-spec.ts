import { INestApplication, ValidationPipe } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "src/app.module";

describe("FlowersController (e2e)", () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleMixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()
        
        app = moduleMixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    })

    it("/flowers (GET)", () => {
        return request(app.getHttpServer())
                .get("/flowwers")
                .expect(200)
                .expect([
                    {
                        "id": 1,
                        "name": "rose",
                        "color": "red",
                        "price": 10,
                        "createdAt": "2024-10-30T21:05:50.817Z",
                        "updatedAt": "2024-10-30T21:05:50.817Z"
                    },
                    {
                        "id": 2,
                        "name": "tulip",
                        "color": "yellow",
                        "price": 7,
                        "createdAt": "2024-10-30T21:06:23.120Z",
                        "updatedAt": "2024-10-30T21:06:23.120Z"
                    },
                    {
                        "id": 3,
                        "name": "lily",
                        "color": "white",
                        "price": 12,
                        "createdAt": "2024-10-30T21:08:55.231Z",
                        "updatedAt": "2024-10-30T21:08:55.231Z"
                    }
                ])
    })

    it("/flowers (POST)", () => {
        return request(app.getHttpServer())
                .post("/flowers")
                .send({
                    name: "Sunflower",
                    color: "yellow",
                    price: 8
                })
                .expect(201)
                .expect(response => {
                    console.log(response.body);
                    return response.body.name === "Sunflower"
                })
    })

    afterAll(async () => {
        await app.close()
    })
})