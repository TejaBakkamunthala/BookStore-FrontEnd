export interface Book{
    bookId:number,
    title:string,
    author:string,
    rating:number,
    ratingCount:number,
    price:number,
    originalPrice:number,
    description:string,
    image:string,
    quantity:number
}

export interface Feedback{
    feedbackId :number,
    userId :number,
    bookId :number,
    userName :string;
    rating :number;
    review :string;
}

export interface Cart{
    cartId:number,
    quantity:number
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean;
  }
