export class Item {
  constructor(entity) {
    Object.assign(
      this,
      {
        brand: 'AAA',
        title: 'BBB',
        description: 'CCC',
        descriptionFull: 'DDD',
        price: 777,
        currency: 'X',
      },
      entity
    )
  }
}