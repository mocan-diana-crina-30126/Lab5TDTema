var app = new Vue({
  el: "#baseband-encoder",
  data: {
    bits: [],
    encodedBits: [],
    encodedNrzLevelBits: [],
    encodedNrzSpaceBits: [],
    encodedNrzMarkBits: [],
    encodedRZBits: [],
    encodedBiphaseMarkBits: [],
    encodedBiphaseSpaceBits: [],
    status: "",
    numberOfBits: 8,
    validateBit: validateBit,
  },
  created: function () {
    this.bits = getBitstream(this.numberOfBits);
  },
  methods: {
    encode: function () {
      this.encodedBits = getManchesterLevelEncoding(this.bits);
      this.encodedNrzLevelBits = getNRZLevelEncoding(this.bits);
      this.encodedNrzSpaceBits = getNRZSpaceEncoding(this.bits);
      this.encodedNrzMarkBits = getNRZMarkEncoding(this.bits);
      this.encodedRZBits = getRZEncoding(this.bits);
      this.encodedBiphaseMarkBits = getBiphaseMarkEncoding(this.bits);
      this.encodedBiphaseSpaceBits = getBiphaseSpaceEncoding(this.bits);
    },
  },
});
