export class CartWishlist {
  private cart!: number;
  private wishList!: number;

  getCart() {
    return 33;// this.cart;
  }

  getWishlist() {
    return this.wishList;
  }

  setCart(value: number) {
    this.cart = value;
  }

  setWishlist(value: number) {
    this.wishList = value;
  }
}