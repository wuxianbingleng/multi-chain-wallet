import { Module, Global, HttpModule } from '@nestjs/common';
import { ConfigModule } from '../../core';
import { BitcoinService } from './bitcoin.service';

@Global()
@Module({
  imports: [ConfigModule, HttpModule],
  providers: [BitcoinService],
  exports: [BitcoinService],
})
export class BitcoinModule {
  constructor(btc: BitcoinService) {
    setTimeout(() => {
      btc.listenBlockTransactions(663320);
    }, 2000);
  }
}
