import { Module } from '@nestjs/common';
import { BtcTransactionService } from './transaction.service';

import { BtcTransactionController } from './transaction.controller';

import { ConfigModule } from '../../../core';
import { BitcoinModule } from '../bitcoin.module';

@Module({
  controllers: [BtcTransactionController],
  imports: [ConfigModule, BitcoinModule],
  providers: [BtcTransactionService],
  exports: [BtcTransactionService],
})
export class BtcTransactionModule {}