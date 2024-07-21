import axios from 'axios';
import {
    IdentityApi,
    BookStoreModuleAuthorEndpointsApi,
    BookStoreModuleBookEndpointsApi,
    BookStoreModuleProductEndpointsApi,
    BookStoreModuleProductCategoryEndpointsApi,
    Configuration,
} from '../api/devbookClient/index';

const baseUrl = import.meta.env.VITE_BASE_URL;
axios.interceptors.request.use(function (config) {
    const authToken = localStorage.getItem(AuthTokenLocalStorageKey);
    config.headers['Authorization'] = `Bearer ${authToken}`;
    return config;
});

const configuration = new Configuration({ basePath: baseUrl });
let identityApi: IdentityApi;
let authorsApi: BookStoreModuleAuthorEndpointsApi;
let booksApi: BookStoreModuleBookEndpointsApi;
let productsApi: BookStoreModuleProductEndpointsApi;
let productCategoriesApi: BookStoreModuleProductCategoryEndpointsApi;

export const AuthTokenLocalStorageKey: string = "AUTH_TOKEN"

export function initializeDevbookClientApis() {
    identityApi = new IdentityApi(configuration);
    authorsApi = new BookStoreModuleAuthorEndpointsApi(configuration);
    booksApi = new BookStoreModuleBookEndpointsApi(configuration);
    productsApi = new BookStoreModuleProductEndpointsApi(configuration);
    productCategoriesApi = new BookStoreModuleProductCategoryEndpointsApi(configuration);
}

export function getIdentityApi(): IdentityApi {
    return identityApi;
}

export function getAuthorsApi(): BookStoreModuleAuthorEndpointsApi {
    return authorsApi;
}

export function getBooksApi(): BookStoreModuleBookEndpointsApi {
    return booksApi;
}

export function getProductsApi(): BookStoreModuleProductEndpointsApi {
    return productsApi;
}

export function getProductCategoriesApi(): BookStoreModuleProductCategoryEndpointsApi {
    return productCategoriesApi;
}
