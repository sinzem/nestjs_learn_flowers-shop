import { Test } from "@nestjs/testing"
import { FlowersService } from "./flowers.service"
import { FlowersController } from "./flowers.controller"
import { ConfigService } from "@nestjs/config"
import { PrismaService } from "../prisma.service"


describe("FlowersService", () => {
    let service: FlowersService

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                FlowersService,
                {
                    provide: PrismaService,
                    useValue: {
                        flower: {
                            findMany: jest.fn().mockResolvedValue([
                                {
                                    id: 1,
                                    name: "Rose",
                                    color: "red",
                                    price: 10
                                }
                            ]),
                            create: jest.fn().mockRejectedValue({
                                id: 2,
                                name: "Lily",
                                color: "white",
                                price: 15
                            })
                        }
                    }
                },
                {
                    provide: ConfigService,
                    useValue: {}
                }
            ]
        }).compile()

        service = module.get<FlowersService>(FlowersService)
    })

    it("should return an array of flowers", async () => {
        expect(await service.findAll()).toEqual([
            {
                id: 1,
                name: "Rose",
                color: "red",
                price: 10
            }
        ])
    })

    it("should create a new flower", async () => {
        expect(await service.create({
                name: "Lily",
                color: "white",
                price: 15
            })
        ).toBe({
            "color": "white",
            "id": 2,
            "name": "Lily",
            "price": 15,
            "createdAt": "2024-10-30T21:08:55.231Z",
            "updatedAt": "2024-10-30T21:08:55.231Z"
        })
    })
})