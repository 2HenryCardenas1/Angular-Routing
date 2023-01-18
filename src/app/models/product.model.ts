export interface Category {
    id: string,
    name: string,
    typeImg: string
}
export interface Product {
    id: string,
    title: string,
    price: number,
    images: string[],
    description: string,
    category: Category
}

//Omit is a utility type that constructs a type by picking all properties from T and then removing K.
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
    categoryId: number,

}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {

}
