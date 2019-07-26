export class Coin {
    id: number;
    name: string;
    price: number;
    symbol: string;
    volume_24h: number;
    market_cap: number;
    circulating_supply: number;

    constructor(coin: any) {
      this.id = coin.id;
      this.name = coin.name;
      this.symbol = coin.symbol;
      this.price = coin.quote.USD.price;
      this.market_cap = coin.quote.USD.market_cap;
      this.volume_24h = coin.quote.USD.volume_24h;
      this.circulating_supply = coin.circulating_supply;
    }

    public getPrice() {
      return this.price && this.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 'n/a';
    }

    public getMarketCap() {
      return this.market_cap && this.market_cap.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 'n/a';
    }

    public get24HVolume() {
      return this.volume_24h && this.volume_24h.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 'n/a';
    }

    public getCirculatingSupply() {
      return this.circulating_supply && this.circulating_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 'n/a';
    }

}