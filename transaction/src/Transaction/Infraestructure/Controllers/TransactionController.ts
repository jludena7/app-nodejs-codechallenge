import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {CreateTransactionUseCase} from "../../Application/UseCases/CreateTransactionUseCase";
import {GetTransactionUseCase} from "../../Application/UseCases/GetTransactionUseCase";
import {CreateTransactionDto} from "../../Domain/Dtos/CreateTransactionDto";
import {TransactionResponseDto} from "../../Domain/Dtos/TransactionResponseDto";

@Controller('transactions')
export class TransactionController {
    constructor(
        private createTransactionUseCase: CreateTransactionUseCase,
        private getTransactionUseCase: GetTransactionUseCase
    ) {}

    @Post()
    async create(@Body() createDto: CreateTransactionDto): Promise<TransactionResponseDto> {
        return this.createTransactionUseCase.execute(createDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<TransactionResponseDto> {
        return this.getTransactionUseCase.execute(id);
    }
}
