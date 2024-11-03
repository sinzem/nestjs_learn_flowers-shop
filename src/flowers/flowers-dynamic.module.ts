import { DynamicModule, Module } from "@nestjs/common";

/* (динамический модуль, в д.с вернет модуль Flowers) */
@Module({})
export class FlowersModule {
    static(options: any): DynamicModule {
        return {
            module: FlowersModule,
            providers: [{provide: "OPTIONS", useValue: options}]
        }
    }
}