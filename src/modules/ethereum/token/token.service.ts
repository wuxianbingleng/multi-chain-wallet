import { Injectable, Inject, forwardRef, HttpException } from '@nestjs/common';
import { Eth_Token } from './token.entity';

import * as R from 'ramda';
import { Web3Service } from '../../../shared/services/web3.service';
import { Op } from 'sequelize';
@Injectable()
export class EthTokenService {
  constructor(
    @Inject('eth_token_repo') private readonly tokenRepo: typeof Eth_Token,
    @Inject(forwardRef(() => Web3Service))
    private readonly web3Service: Web3Service,
  ) {}

  async findAll(where) {
    const tokens = await this.tokenRepo.findAll({
      where: R.pick(['contract', 'symbol'])(where),
      limit: 10,
      order: [['sort', 'asc']],
      raw: true,
    });
    return {
      tokens,
    };
  }

  async findOne(where) {
    return await this.tokenRepo.findOne({
      where: R.pick(['contract', 'symbol'])(where),
      raw: true,
    });
  }

  async findAsset(where) {
    const { wallet, names } = where;
    const res = await this.tokenRepo.findAll({
      where: {
        name: {
          [Op.in]: names.split(','),
        },
      },
      raw: true,
    });
    if (!res.length) {
      throw new HttpException('token不存在', 400);
    }
    const tokens = await Promise.all(
      res.map(async (token) => {
        const { contract } = token;
        const balance = await this.web3Service.myBalanceOf(contract, wallet);
        return R.mergeRight(token, {
          balance,
        });
      }),
    );
    return {
      wallet,
      tokens,
    };
  }
}
