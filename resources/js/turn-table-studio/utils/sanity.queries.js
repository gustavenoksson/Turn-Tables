import { client } from "./sanity.client";

const getAllProducts = `*[_type == 'product'] {
  _id,
  title,
  image,
  price,
  currency,
  slug,
  subcategory->{
    title,
    category->{
      title,
    },
  },
}`;

const getProductsBySlug = `*[_type == 'product' && category->slug.current == $slug]
{
  _id,
  title,
  image,
  description,
  price,
  currency,
  slug,
  category->{
    title,
  },
  subcategory->{
    title,
  }
}`;

const getProductBySlug = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  image,
  description,
  price,
  currency,
  slug,
  subcategory->{
    title,
    category->{
      title,
    },
  },
}`;

const getAllCategories = `*[_type == 'category'] {
  _id,
  title,
  slug,
  description,
}`;

const fetchAllProducts = () => client.fetch(getAllProducts);

const fetchAllCategories = () => client.fetch(getAllCategories);

const fetchProductBySlug = (slug) => {
  return client.fetch(getProductBySlug, { slug });
};

const fetchProductsBySlug = (slug) => {
  return client.fetch(getProductsBySlug, { slug });
};

export { fetchAllProducts, fetchProductBySlug, fetchProductsBySlug, fetchAllCategories };