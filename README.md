# o-pairs
Convert an object into a array of `[key, value]` pairs


## Install

```sh
$ npm install --save o-pairs
```

## Example

```js
var pairs = require('o-pairs');

console.log(pairs({ America: 'Washington', India: 'Mumbai', Canada: 'Ottawa' }));
// -> [['America', 'Washington'], ['India', 'Mumbai'], ['Canada', 'Ottawa']]
```

### `require('o-pairs')(object)`

**Arguments**:
- `object`: An object

**Returns**: Returns array of `[key, value]` pairs

## License

&copy; 2016 Vikram Jadhav. MIT License
