/**
 * Copyright (c) 2018 zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Resource } from './resource'

export class Collection extends Resource {
  constructor(data: any, formatter: any = null, key: any = null) {
    super(data, formatter, key);
    this.type = 'collection';
  }
}